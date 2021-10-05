import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';

const Mda = require('../mdas/mdas.model');

const MdaType = require('../mdas/mdas.type');


const BudgetEdgeType = new GraphQLObjectType({
    name: 'BudgetEdge',
    fields: () => ({
        cursor: {
            type: GraphQLString
        },
        node: {
            type: BudgetType
        }
    })
});
const BudgetPageInfoType = new GraphQLObjectType({
    name: 'BudgetPageInfo',
    fields: () => ({
        startCursor: {
            type: GraphQLString
        },
        endCursor: {
            type: GraphQLString
        },
        hasNextPage: {
            type: GraphQLBoolean
        },
        hasPreviousPage: {
            type: GraphQLBoolean
        }
    })
});
const BudgetListType = new GraphQLObjectType({
    name: 'BudgetList',
    fields: () => ({
        edges: {
            type: new GraphQLList(BudgetEdgeType),
        },
        pageInfo: {
            type: BudgetPageInfoType
        },
        totalCount: {
            type: GraphQLInt
        }
    })
});
const BudgetType = new GraphQLObjectType({
    name: 'Budgets',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        budget_line_item: {
            type: GraphQLString
        },
        budget_code: {
            type: GraphQLString,
        },
        amount: {
            type: GraphQLString,
        },

        year: {
            type: GraphQLString,
        },

        mda: {
            type: MdaType,
            resolve(parent, args) {
                return Mda.findById(parent.mdaId);
            }
        },
        mdaId: {
            type: GraphQLID
        },
    })
});

module.exports = {
    BudgetType,
    BudgetListType
};