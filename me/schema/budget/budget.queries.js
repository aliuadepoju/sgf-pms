import graphql, {
    GraphQLSkipDirective
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt

} from 'graphql';
import Budget from './budget.model';
import {
    BudgetType,
    BudgetListType
} from './budget.type';


const budgetQueries = {
    budget: {
        type: BudgetType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Budget.findById(args.id);
        }
    },
    deleteBudget: {
        type: BudgetType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Budget.findByIdAndRemove(args.id);
        }
    },
    deleteBudgetByYear: {
        type: BudgetType,
        args: {
            year: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Budget.deleteMany({
                year: args.year
            }).sort({

            });
        }
    },
    deleteBudgetByMDAYear: {
        type: BudgetType,
        args: {
            year: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Budget.deleteMany({
                year: args.year,
                mdaId: args.mdaId
            });
        }
    },
    budgetByYear: {
        type: BudgetListType,
        args: {
            year: {
                type: GraphQLString
            },
            first: {
                type: GraphQLInt
            },
            last: {
                type: GraphQLInt
            },
            before: {
                type: GraphQLID
            },
            after: {
                type: GraphQLID
            },

        },
        async resolve(parent, args) {

            let totalCount = await Budget.find().countDocuments();
            // const totalCount = data.length;
            let after = args.after;
            let before = args.before;
            let last = args.last !== undefined ? args.last : 0;
            let first = args.first !== undefined ? args.first : 0;
            let endCursor
            let startCursor
            let start = 0;
            let end = 0;
            let dataList = [];
            let intData;
            let nxtData;
            let prevData;

            // console.log(before, after);
            // console.log(first, last);


            let firstCheck = await Budget.findOne({
                year: args.year
            }).sort({
                '_id': 1
            })
            let lastCheck = await Budget.findOne({
                year: args.year
            }).sort({
                '_id': -1
            })


            if (after == undefined && before == undefined) {
                intData = await Budget.find({
                    year: args.year
                }).sort({
                    '_id': 1
                }).limit(10)

            }

            if (after != undefined) {
                nxtData = await Budget.find({
                    year: args.year,
                    '_id': {
                        $gt: after
                    }
                }).sort({
                    '_id': 1
                }).limit(first)
            }
            if (before != undefined) {
                prevData = await Budget.find({
                    year: args.year,
                    '_id': {
                        $lt: before
                    }
                }).sort({
                    '_id': 1
                }).limit(last)
            }
            // console.log(prevData);

            dataList =
                after !== undefined ? nxtData : before !== undefined ? prevData : intData;

            let edges = [];
            for (let index = 0; index < dataList.length; index++) {
                const element = dataList[index];

                endCursor = dataList[dataList.length - 1]._id;
                startCursor = dataList[0]._id;

                let res = {
                    cursor: endCursor,
                    node: element
                }
                edges.push(res)

            }
            console.log(firstCheck._id, startCursor);


            // startCursor = after === undefined || after === 0 ? data[start]._id : data[end + last]._id;
            const hasNextPage = lastCheck._id != endCursor ? true : false;
            const hasPreviousPage = firstCheck._id == startCursor ? false : true;
            const pageInfo = {
                endCursor,
                startCursor,
                hasNextPage,
                hasPreviousPage,
            }
            const result = {
                edges,
                pageInfo,
                totalCount,
            };
            return result;
        }
    },
    budgetByMDAYear: {
        type: new GraphQLList(BudgetType),
        args: {
            year: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Budget.find({
                year: args.year,
                mdaId: args.mdaId
            }).sort({

            });
        }
    },
}
module.exports = budgetQueries;