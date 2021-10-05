import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Contractor from './contractor.model';
import ContractorType from './contractor.type';


const contractorQueries = {
    contractor: {
        type: ContractorType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Contractor.findById(args.id);
        }
    },
    deleteContractor: {
        type: ContractorType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Contractor.findByIdAndRemove(args.id);
        }
    },
    contractors: {
        type: new GraphQLList(ContractorType),
        args: {},
        resolve(parent, args) {
            return Contractor.find().sort({
                name: -1
            });
        }
    },
}
module.exports = contractorQueries;