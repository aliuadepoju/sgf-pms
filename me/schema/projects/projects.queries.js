import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType
} from 'graphql';

import Project from './projects.model';

import {
    ProjectType,
    ProjectListType
} from './projects.type';


const ProjectDetailsType = new GraphQLObjectType({
    name: 'ProjectsPayload',
    fields: () => ({
        all: {
            type: GraphQLInt
        },
        notstarted: {
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
const ProjectQueries = {
    projects: {
        type: ProjectType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Project.findById(args.id);
        }
    },
    deleteProject: {
        type: ProjectType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Project.findByIdAndRemove(args.id);
        }
    },
    deleteProjectBatch: {
        type: ProjectType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        async resolve(parent, args) {
            let project = await Project.findById(args.id);

            return Project.deleteMany({
                batch: project.batch
            });
        }
    },
    projectsByDeliverables: {
        type: new GraphQLList(ProjectType),
        args: {
            deliverableId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Project.find({
                mandateId: args.deliverableId
            }).sort({

            });
        }
    },
    projects: {
        type: new GraphQLList(ProjectType),
        args: {},
        resolve(parent, args) {
            return Project.find().sort({

            });
        }
    },
    projectsForDownload: {
        type: new GraphQLList(ProjectType),
        args: {
            mdaId: {
                type: GraphQLString
            },
        },
        resolve(parent, args) {
            return Project.find({
                mdaId: args.mdaId
            }).sort({

            });
        }
    },
    projectsByMda: {
        type: ProjectListType,
        args: {
            mdaId: {
                type: GraphQLString
            },
            first: {
                type: GraphQLInt
            },
            last: {
                type: GraphQLInt
            },
            before: {
                type: GraphQLID
            },
            after: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {
            let check
            if (args.mdaId == 'all') {
                check = {}
            } else {

                check = {
                    mdaId: JSON.parse(args.mdaId)
                }
            }

            let totalCount = await Project.find(check).countDocuments();
            // const totalCount = data.length;
            let after = args.after;
            let before = args.before;
            let last = args.last !== undefined ? args.last : 0;
            let first = args.first !== undefined ? args.first : 0;
            let endCursor
            let startCursor
            let start = 0;
            let end = 0;
            let dataList = [];
            let intData;
            let nxtData;
            let prevData;
            let hasNextPage
            let hasPreviousPage
            // console.log(before, after);
            // console.log(first, last);


            let firstCheck = await Project.findOne(check).sort({
                '_id': 1
            })
            let lastCheck = await Project.findOne(check).sort({
                '_id': -1
            })

            console.log(args.after);

            if (after == undefined && before == undefined) {
                intData = await Project.find(
                    check
                ).sort({
                    '_id': 1
                }).limit(10)

            }

            if (after != undefined) {
                nxtData = await Project.find({
                    ...check,
                    '_id': {
                        $gt: after
                    }
                }).sort({
                    '_id': 1
                }).limit(first)
            }
            if (before != undefined) {
                prevData = await Project.find({
                    ...check,
                    '_id': {
                        $lt: before
                    }
                }).sort({
                    '_id': 1
                }).limit(last)
            }
            // console.log(prevData);

            dataList =
                after !== undefined ? nxtData : before !== undefined ? prevData : intData;
            // console.log(dataList[0].title);
            let edges = [];

            if (dataList.length == 0) {
                hasNextPage = false;
                hasPreviousPage = false;
            } else {

                for (let index = 0; index < dataList.length; index++) {
                    const element = dataList[index];

                    endCursor = dataList[dataList.length - 1]._id;
                    startCursor = dataList[0]._id;

                    let res = {
                        cursor: endCursor,
                        node: element
                    }
                    edges.push(res)

                }
                // console.log(firstCheck._id, startCursor);


                // startCursor = after === undefined || after === 0 ? data[start]._id : data[end + last]._id;
                hasNextPage = lastCheck._id != endCursor ? true : false;
                hasPreviousPage = firstCheck._id == startCursor ? false : true;
            }

            const pageInfo = {
                endCursor,
                startCursor,
                hasNextPage,
                hasPreviousPage,
            }
            const result = {
                edges,
                pageInfo,
                totalCount,
            };
            return result;

        }
    },

    projectDetails: {
        type: ProjectDetailsType,
        args: {
            mdaId: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let all
            let ongoing
            let completed
            let abandoned
            let notstarted

            if (args.mdaId == 'all') {
                all = await Project.find().countDocuments();
                //console.log(all);
                notstarted = await Project.countDocuments({
                    status: 'Not Started',
                })
                ongoing = await Project.countDocuments({
                    status: 'Ongoing',
                })
                completed = await Project.countDocuments({
                    status: 'Completed',
                })
                abandoned = await Project.countDocuments({
                    status: 'Abandoned',
                });

            } else {
                let mdas = JSON.parse(args.mdaId);
                all = await Project.countDocuments({
                    mdaId: mdas
                })
                notstarted = await Project.countDocuments({
                    status: 'Not Started',
                    mdaId: mdas
                })
                ongoing = await Project.countDocuments({
                    status: 'Ongoing',
                    mdaId: mdas
                })
                completed = await Project.countDocuments({
                    status: 'Completed',
                    mdaId: mdas
                })
                abandoned = await Project.countDocuments({
                    status: 'Abandoned',
                    mdaId: mdas
                });
            }
            let data = {
                all: all,
                ongoing: ongoing,
                completed: completed,
                abandoned: abandoned,
                notstarted: notstarted,

            }

            return data;

        }
    }

}
module.exports = ProjectQueries;