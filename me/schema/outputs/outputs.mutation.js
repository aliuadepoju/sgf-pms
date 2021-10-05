import graphql, {
    GraphQLFloat
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLInputObjectType
} from 'graphql';

import Output from './outputs.model';
import OutputsType from './outputs.type';
// import Activity from '../activity/activity.model';
const StatusType = new GraphQLObjectType({
    name: 'StatusOutp',
    fields: () => ({
        status: {
            type: GraphQLString
        },
    })
})

const outputInputType = new GraphQLInputObjectType({
    name: 'outputInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        ref: {
            type: GraphQLInt
        },
        currency: {
            type: GraphQLString
        },
        active: {
            type: GraphQLInt
        },

        title: {
            type: GraphQLString
        },
        outputType: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        datasource: {
            type: GraphQLString
        },
        mandateId: {
            type: GraphQLID
        },
        indicatorId: {
            type: GraphQLID
        },
        baseline: {
            type: GraphQLString
        },
        actual: {
            type: GraphQLString
        },
        actual2021: {
            type: GraphQLString
        },
        target: {
            type: GraphQLString
        },
        unitType: {
            type: GraphQLString

        },
        unit: {
            type: GraphQLString

        },
        aggregation: {
            type: GraphQLString
        },
        rt: {
            type: GraphQLString
        },
        mdaId: {
            type: GraphQLID
        },

    })
});
const outputsMutations = {
    createOutput: {
        type: OutputsType,
        args: {
            outputInput: {
                type: new GraphQLNonNull(outputInputType)
            },
        },
        async resolve(parent, args) {
            //console.log(args);
            let data = await args.outputInput

            let newOutput = {
                title: data.title,
                type: data.type,
                unit: data.unit,
                unitType: data.unitType,
                datasource: data.datasource,
                outputType: data.outputType,
                target: data.target,
                mdaId: data.mdaId,
                mandateId: data.mandateId,
                indicatorId: data.indicatorId,
                aggregation: data.aggregation,
                actual: data.actual,
                baseline: data.baseline,



            }

            let output = await new Output(data);
            await output.save()
            //console.log(output);

            return output








            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: args.device,
            //     outputId: args.outputId,
            // })

        }
    },
    editOutput: {
        type: OutputsType,
        args: {
            year: {
                type: GraphQLString
            },
            outputInput: {
                type: new GraphQLNonNull(outputInputType)
            },
        },
        async resolve(parent, args) {
            console.log(args.year);
            let data = args.outputInput

            let newOutput = await {
                title: data.title,
                datasource: data.datasource,
                type: data.type,
                target: data.target,
                aggregation: data.aggregation,
                // actual: data.actual,
                baseline: data.baseline,
                unit: data.unit,
                unitType: data.unitType,
                mdaId: data.mdaId,
            }
            if (args.year == '2020')
                newOutput.actual = data.actual
            else if (args.year == '2021')
                newOutput.actual2021 = data.actual

            console.log(newOutput);

            return Output.findByIdAndUpdate(data.id, newOutput, {
                new: true
            });
        }
    },


    move: {
        type: OutputsType,
        args: {
            outputId: {
                type: GraphQLID
            },
            indicatorId: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {
            //console.log(args);
            let data = args.outputInput

            let newOutput = {
                indicatorId: args.indicatorId,
            }
            return Output.findByIdAndUpdate(args.outputId, newOutput, {
                new: true
            });
        }
    },
    submitSubs: {
        type: StatusType,
        args: {
            mdaId: {
                type: GraphQLID
            },

            subData: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let subs = JSON.parse(args.subData);
            let CurrentDeliverable
            for await (const sub of subs) {
                console.log(sub);

                if (sub.type == 'D') {
                    if (sub.uuid == '') {

                    }
                } else {

                }

            }
        }
    }
    // editWallet: {
    //     type: WalletType,
    //     args: {
    //         id: {
    //             type: new GraphQLNonNull(GraphQLID)
    //         },
    //         title: {
    //             type: new GraphQLNonNull(GraphQLString)
    //         },
    //     },
    //     resolve(parent, args) {
    //         let wallet = {
    //             title: args.title,
    //             slug: args.title.replace(/\s+/g, '-').toLowerCase()
    //         };

    //         return Wallet.findByIdAndUpdate(args.id, wallet, {
    //             new: true
    //         });
    //     },
    // },

}




module.exports = outputsMutations;