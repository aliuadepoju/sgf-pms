import graphql, {
    GraphQLInt
} from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

import Contractor from '../contractor/contractor.model';
import ContractorType from '../contractor/contractor.type';
import Budget from '../budget/budget.model';
import {
    BudgetType,
    BudgetListType
} from '../budget/budget.type';
import Mda from '../mdas/mdas.model';
import MdaType from '../mdas/mdas.type';

const ContractType = new GraphQLObjectType({
    name: 'Contracts',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        budget: {
            type: BudgetType,
            resolve(parent, args) {
                return Budget.findById(parent.budget);

            }

        },
        fecId: {
            type: GraphQLString

        },
        contractor: {
            type: ContractorType,
            resolve(parent, args) {
                return Contractor.findById(parent.contractorId);

            }
        },
        mda: {
            type: MdaType,
            resolve(parent, args) {
                return Mda.findById(parent.mdaId);

            }
        }
        // items: {
        //     type: new GraphQLList(ItemType),
        //     resolve(parent, args) {
        //         return Item.find({
        //             categoryId: parent.id
        //         });
        //     }
        // }
    })
});
module.exports = ContractType;