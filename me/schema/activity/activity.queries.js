import graphql, {
    GraphQLInt
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType
} from 'graphql';
import Actvity from './activity.model';
import ActvityType from './activity.type';
import Output from '../outputs/outputs.model';
import OutputType from '../outputs/outputs.type';
import Indicator from '../indicators/indicators.model';
import IndicatorType from '../indicators/indicators.type';
import Project from '../projects/projects.model';
import {
    ProjectType
} from '../projects/projects.type';
// import Output from './activity.model';
const SearchType = new GraphQLObjectType({
    name: 'Search',
    fields: () => ({
        projects: {
            type: new GraphQLList(ProjectType)
        },
        outputs: {
            type: new GraphQLList(OutputType)
        },
        indicators: {
            type: new GraphQLList(IndicatorType)
        },
        results: {
            type: GraphQLInt
        },
    })
})

const actvityQueries = {
    actvity: {
        type: ActvityType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Actvity.findById(args.id);
        }
    },
    userActivities: {
        type: new GraphQLList(ActvityType),
        args: {
            userId: {
                type: GraphQLID
            }
        },
        async resolve(parent, args) {
            //console.log(args.userId);

            let acts = await Actvity.find({
                userId: args.userId
            })
            //console.log(acts);
            return acts;
        }
    },
    deleteActvity: {
        type: ActvityType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Actvity.findByIdAndRemove(args.id);
        }
    },
    actvities: {
        type: new GraphQLList(ActvityType),
        args: {},
        resolve(parent, args) {
            return Actvity.find().sort({

            });
        }
    },
    search: {
        type: SearchType,
        args: {
            query: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let ind = await Indicator.find({
                tree: 2,
                $text: {
                    $search: args.query
                }
            }, {
                score: {
                    $meta: "textScore"
                }
            }).sort({
                score: {
                    $meta: "textScore"
                }
            });
            let output = await Output.find({
                tree: 2,
                $text: {
                    $search: args.query
                }
            }, {
                score: {
                    $meta: "textScore"
                }
            }).sort({
                score: {
                    $meta: "textScore"
                }
            })
            let project = await Project.find({
                tree: 2,
                $text: {
                    $search: args.query
                }
            }, {
                score: {
                    $meta: "textScore"
                }
            }).sort({
                score: {
                    $meta: "textScore"
                }
            });
            console.log(project);

            let res = {
                indicators: ind,
                outputs: output,
                projects: project,
                results: ind.length + output.length + project.length
            }
            console.log(res);
            return res
        }
    },
}
module.exports = actvityQueries;