import graphql, {
    GraphQLObjectType
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Budget from './budget.model';
import {
    BudgetType,
    BudgetListType
} from './budget.type';



const StatusType = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
        status: {
            type: GraphQLString
        },
    })
})
const budgetMutations = {
    createBudget: {
        type: StatusType,
        args: {
            budget_data: {
                type: new GraphQLNonNull(GraphQLString)
            },
            year: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLString

            }

        },
        async resolve(parent, args) {
            let budget_data = JSON.parse(args.budget_data);
            let budget = []

            budget_data.forEach(element => {
                let data = {}
                data.budget_code = element.budget_code
                data.budget_line_item = element.budget_line_item
                data.amount = element.amount
                data.year = args.year
                data.mdaId = args.mdaId
                budget.push(data);
            });


            await Budget.insertMany(budget);
            return {
                status: 'success'
            }

        }
    },
    editBudget: {
        type: BudgetType,
        args: {
            id: {
                type: GraphQLID
            },
            budget_code: {
                type: GraphQLString
            },
            budget_line_item: {
                type: GraphQLString

            },
            amount: {
                type: GraphQLString
            },
        },
        async resolve(parent, args) {




            let budget = {
                budget_code: args.budget_code,
                budget_line_item: args.budget_line_item,
                amount: args.amount
            };

            return Budget.findByIdAndUpdate(args.id, budget, {
                new: true
            });
        }
    },

}




module.exports = budgetMutations;