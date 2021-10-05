import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Release from './release.model';
import ReleaseType from './release.type';


const releaseQueries = {
    release: {
        type: ReleaseType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Release.findById(args.id);
        }
    },
    deleteRelease: {
        type: ReleaseType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Release.findByIdAndRemove(args.id);
        }
    },

    deleteReleaseByYear: {
        type: ReleaseType,
        args: {
            year: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Release.deleteMany({
                year: args.year
            }).sort({

            });
        }
    },
    deleteReleaseByQuarter: {
        type: ReleaseType,
        args: {
            year: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLID
            },
            quarter: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Release.deleteMany({
                quarter: args.quarter,
                year: args.year,
                mdaId: args.mdaId
            }).sort({

            });
        }
    },
    deleteReleaseByMDAYear: {
        type: ReleaseType,
        args: {
            year: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Release.deleteMany({
                year: args.year,
                mdaId: args.mdaId
            });
        }
    },
    releaseByYear: {
        type: new GraphQLList(ReleaseType),
        args: {
            year: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Release.find({
                year: args.year
            }).sort({

            });
        },

    },
    releaseByQuarter: {
        type: new GraphQLList(ReleaseType),
        args: {
            year: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Release.find({
                quarter: args.quarter,
                year: args.year
            }).sort({

            });
        }
    }
}
module.exports = releaseQueries;