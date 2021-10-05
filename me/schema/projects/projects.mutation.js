import graphql, {
    GraphQLFloat
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql';

import Project from './projects.model';
import Output from '../outputs/outputs.model';
import Mandate from '../mandates/mandates.model';
import {
    ProjectType,
    ProjectListType
} from './projects.type';
// import Activity from '../activity/activity.model';


const projectInputType = new GraphQLInputObjectType({
    name: 'projectInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        currency: {
            type: GraphQLString
        },
        puid: {
            type: GraphQLString
        },
        contractId: {
            type: GraphQLString
        },
        mdaId: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },

        budget: {
            type: GraphQLFloat
        },
        budgetId: {
            type: GraphQLID
        },
        cost: {
            type: GraphQLFloat
        },
        type: {
            type: GraphQLInt
        },
        start_date: {
            type: GraphQLString
        },
        end_date: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        lga: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLID
        },
        outputId: {
            type: GraphQLID
        },
        initiativeId: {
            type: GraphQLID
        },
        indicatorId: {
            type: GraphQLID
        },
        budgetItem: {
            type: GraphQLID

        },
        fecId: {
            type: GraphQLString,
        },
    })
})
const projectsMutations = {
    createProject: {
        type: ProjectType,
        args: {
            projectInput: {
                type: projectInputType
            }


        },
        async resolve(parent, args) {
            let data = args.projectInput;
            //console.log(data);

            let output = await Output.findById(data.outputId);
            let project = new Project({
                contractId: data.contractId,
                mdaId: data.mdaId,
                title: data.title,
                approvalDate: data.approvalDate,
                currency: data.currency,
                budget: data.budget,
                cost: data.cost,
                type: data.type,
                start_date: data.start_date,
                end_date: data.end_date,
                status: data.status,
                state: data.state,
                lga: data.lga,
                userId: data.userId,
                fecId: data.fecId,
                budgetItem: data.budgetItem,
                mandateId: output.mandateId,
                outputId: data.outputId,
                indicatorId: data.indicatorId,
                initiativeId: data.initiativeId,
            })
            return project.save();

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: data.device,
            //     userId: data.userId,
            // })

        }
    },
    editProject: {
        type: ProjectType,
        args: {
            projectInput: {
                type: projectInputType
            }


        },
        async resolve(parent, args) {
            let data = args.projectInput;
            //console.log(data);

            let output = await Output.findById(data.outputId);
            let project = {
                contractId: data.contractId,
                mdaId: data.mdaId,
                title: data.title,
                currency: data.currency,
                budget: data.budget,
                budgetId: data.budgetId,
                cost: data.cost,
                type: data.type,
                start_date: data.start_date,
                end_date: data.end_date,
                status: data.status,
                state: data.state,
                lga: data.lga,
                userId: data.userId,
                fecId: data.fecId,
                budgetItem: data.budgetItem,
                mandateId: output.mandateId,
                outputId: data.outputId,
                indicatorId: data.indicatorId,
                initiativeId: data.initiativeId,
            }
            return Project.findByIdAndUpdate(data.id, project, {
                new: true
            });

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: data.device,
            //     userId: data.userId,
            // })

        }
    },
    assignMandates: {
        type: ProjectType,
        args: {
            mandates: {
                type: GraphQLString
            },
            projectId: {
                type: GraphQLID
            },
            si: {
                type: GraphQLString
            },

        },
        async resolve(parent, args) {
            let data = JSON.parse(args.mandates);
            //console.log(data);
            let mandate = await Mandate.findById(data[0].id);
            let project = {
                mandates: data,
                outputId: mandate.outputId,
                si: args.si

            }
            return Project.findByIdAndUpdate(args.projectId, project, {
                new: true
            });

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: data.device,
            //     userId: data.userId,
            // })

        }
    },
    assignSI: {
        type: ProjectType,
        args: {
            si: {
                type: GraphQLString
            },
            projectId: {
                type: GraphQLID
            }


        },
        async resolve(parent, args) {
            
            //console.log(data);

            let project = {
                si: args.si
            }
            return Project.findByIdAndUpdate(args.projectId, project, {
                new: true
            });

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: data.device,
            //     userId: data.userId,
            // })

        }
    },
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




module.exports = projectsMutations;