import graphql, {
    GraphQLBoolean
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType
} from 'graphql';

import Logframe from './logframes.model';
import Reporting from './reporting.model';
import MDA from '../mdas/mdas.model';
import Output from '../outputs/outputs.model';
import Project from '../projects/projects.model';
import LogframeType from './logframes.type';
import reportType from './reporting.type';

const LogframeDetailsType = new GraphQLObjectType({
    name: 'LogframesPayload',
    fields: () => ({
        all: {
            type: GraphQLInt
        },
        ongoing: {
            type: GraphQLInt
        },
        completed: {
            type: GraphQLInt
        },
        abandoned: {
            type: GraphQLInt
        }
    })
});
const reportingType = new GraphQLObjectType({
    name: 'reportingType',
    fields: () => ({
        total: {
            type: GraphQLInt
        },
        count: {
            type: GraphQLInt
        },
        shortcode: {
            type: GraphQLString
        },
        lastCheck: {
            type: GraphQLBoolean
        }
    })
});
const reportRateType = new GraphQLObjectType({
    name: 'reportRateType',
    fields: () => ({
        reports: {
            type: new GraphQLList(reportingType)
        },
        totalPercentage: {
            type: GraphQLInt
        },

    })
});
const LogframeQueries = {
    logframes: {
        type: LogframeType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Logframe.findById(args.id);
        }
    },
    reportingRate: {
        type: reportRateType,
        args: {
            mdaId: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {
            let mdas = await MDA.find();
            let reports = []
            let totalAll = await Reporting.countDocuments();
            let reportedAll = await Reporting.find({
                status: true
            }).countDocuments();
            for (const element of mdas) {
                let total = await Reporting.find({
                    mdaId: element._id
                }).countDocuments();
                let reported = await Reporting.find({
                    mdaId: element._id,
                    status: true
                }).countDocuments();

                reports.push({
                    total: total,
                    count: reported,
                    shortcode: element.shortcode
                });
            };
            return {
                reports: reports,
                totalPercentage: reportedAll / totalAll * 100
            }
        }
    },
    lastReport: {
        type: reportRateType,
        args: {

        },
        async resolve(parent, args) {
            let mdas = await MDA.find();
            let reports = []

            for (const element of mdas) {

                let last = await Reporting.findOne({
                    mdaId: element._id,
                });

                reports.push({
                    lastCheck: last.status,
                    shortcode: element.shortcode
                });
            };
            return {
                reports: reports,
            }
        }
    },
    checkReport: {
        type: new GraphQLList(reportType),
        args: {
            mdaId: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {
            let rep = await Reporting.find({
                mdaId: args.mdaId,
                status: false
            })
            return rep;
        }
    },
    deleteLogframe: {
        type: LogframeType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Logframe.findByIdAndRemove(args.id);
        }
    },
    changeLogframeStatus: {
        type: LogframeType,
        args: {
            id: {
                type: GraphQLID
            },
            logframeStatus: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let log = await Logframe.findById(args.id);
            log.logframeStatus = args.logframeStatus;
            if (args.logframeStatus == 'Approved') {
                let output = await Output.findById(log.outputId);
                let project = await Project.findById(log.projectId);
                project.status = log.status;
                project.save();
                if (output.aggregation == '+') {
                    output.actual += log.outputValue
                }
                if (output.aggregation == '-') {
                    output.actual -= log.outputValue

                }
                output.save();
            }
            return log.save();
        }
    },

    logframes: {
        type: new GraphQLList(LogframeType),
        args: {},
        resolve(parent, args) {
            return Logframe.find().sort({

            });
        }
    },
    logframesByMda: {
        type: new GraphQLList(LogframeType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Logframe.find({
                mdaId: args.mdaId
            }).sort({

            });
        }
    },

    logframeDetails: {
        type: LogframeDetailsType,
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {


            let all = Logframe.countDocuments({
                mdaId: args.mdaId
            })
            let ongoing = Logframe.countDocuments({
                status: 'Ongoing',
                mdaId: args.mdaId
            })
            let completed = Logframe.countDocuments({
                status: 'Completed',
                mdaId: args.mdaId
            })
            let abandoned = Logframe.countDocuments({
                status: 'Abandoned',
                mdaId: args.mdaId
            });
            let data = {
                all: all,
                ongoing: ongoing,
                completed: completed,
                abandoned: abandoned,
            }

            return data;

        }
    }

}
module.exports = LogframeQueries;