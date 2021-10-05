import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Initiative from './initiatives.model';
import InitiativeType from './initiatives.type';


const InitiativeQueries = {
    initiative: {
        type: InitiativeType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Initiative.findById(args.id);
        }
    },
    deleteInitiative: {
        type: InitiativeType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Initiative.findByIdAndRemove(args.id);
        }
    },
    initiativesByMda: {
        type: new GraphQLList(InitiativeType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Initiative.find({
                mdaId: args.mdaId
            }).sort({

            });
        }
    },
    initiatives: {
        type: new GraphQLList(InitiativeType),
        args: {},
        resolve(parent, args) {
            return Initiative.find().sort({

            });
        }
    },

}
module.exports = InitiativeQueries;