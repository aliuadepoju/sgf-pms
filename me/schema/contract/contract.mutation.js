import graphql, {
    GraphQLInt
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Contract from './contract.model';
import ContractType from './contract.type';



const contractMutations = {
    createContract: {
        type: ContractType,
        args: {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            contractorId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            mdaId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            budget: {
                type: new GraphQLNonNull(GraphQLID)
            },
            fecId: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve(parent, args) {
            let contract = new Contract({
                title: args.title,
                contractorId: args.contractorId,
                mdaId: args.mdaId,
                budget: args.budget,
                fecId: args.fecId,
                // slug: args.title.replace(/\s+/g, '-').toLowerCase()
            });
            return contract.save();
        }
    },
    editContract: {
        type: ContractType,
        args: {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            contractorId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            mdaId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            budget: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            fecId: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve(parent, args) {
            let contract = {
                title: args.title,
                contractorId: args.contractorId,
                mdaId: args.mdaId,
                budget: args.budget,
                fecId: args.fecId,
            };

            return Contract.findByIdAndUpdate(args.id, contract, {
                new: true
            });
        },
    },

}




module.exports = contractMutations;