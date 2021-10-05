import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Contract from './contract.model';
import ContractType from './contract.type';


const contractQueries = {
    contract: {
        type: ContractType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Contract.findById(args.id);
        }
    },
    deleteContract: {
        type: ContractType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Contract.findByIdAndRemove(args.id);
        }
    },
    contracts: {
        type: new GraphQLList(ContractType),
        args: {},
        resolve(parent, args) {
            return Contract.find().sort({

            });
        }
    },
    contractsByMdas: {
        type: new GraphQLList(ContractType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Contract.find({
                mdaId: args.mdaId
            }).sort({

            });
        }
    },
}
module.exports = contractQueries;