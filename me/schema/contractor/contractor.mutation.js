import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Contractor from './contractor.model';
import ContractorType from './contractor.type';



const contractorMutations = {
    createContractor: {
        type: ContractorType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            cacNo: {
                type: new GraphQLNonNull(GraphQLString)
            },
            address: {
                type: new GraphQLNonNull(GraphQLString)
            },
            state: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve(parent, args) {
            let contractor = new Contractor({
                name: args.name,
                cacNo: args.cacNo,
                state: args.state,
                address: args.address,
            });
            return contractor.save();
        }
    },
    editContractor: {
        type: ContractorType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            cacNo: {
                type: new GraphQLNonNull(GraphQLString)
            },
            address: {
                type: new GraphQLNonNull(GraphQLString)
            },
            state: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        resolve(parent, args) {
            let contractor = {
                name: args.name,
                cacNo: args.cacNo,
                state: args.state,
                address: args.address,
            };

            return Contractor.findByIdAndUpdate(args.id, contractor, {
                new: true
            });
        },
    },

}




module.exports = contractorMutations;