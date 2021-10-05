import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import User from '../user/user.model';
import UserType from '../user/user.type';
import Output from '../outputs/outputs.model';
import Indicator from '../indicators/indicators.model';
import Mandate from './mandates.model';
import MandateType from './mandates.type';
import Activity from '../activity/activity.model';



const mandateMutations = {
    createMandate: {
        type: MandateType,
        args: {
            title: {
                type: GraphQLString
            },

            mdaId: {
                type: GraphQLID
            },
            outputId: {
                type: GraphQLID
            },
            priorityId: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {

            let md = new Mandate({
                title: args.title,
                mdaId: args.mdaId,
                outputId: args.outputId,
                priorityId: args.priorityId,

            });

            return md.save();
        }
    },
    editMandate: {
        type: MandateType,
        args: {
            id: {
                type: GraphQLID
            },
            title: {
                type: GraphQLString
            },
            mda: {
                type: GraphQLID
            },

        },
        async resolve(parent, args) {




            let mandate = {
                title: args.title,
                mdaId: args.mda
            };
            // await Output.updateMany({
            //     mandateId: mandate._id
            // }, {
            //     $set: {
            //         mdaId: args.mda
            //     }
            // })
            // await Indicator.updateMany({
            //     mandateId: mandate._id
            // }, {
            //     $set: {
            //         mdaId: args.mda
            //     }
            // })
            return Mandate.findByIdAndUpdate(args.id, mandate, {
                new: true
            });
        }
    },

    createSubInitiative: {
        type: MandateType,
        args: {
            id: {
                type: GraphQLID
            },
            si: {
                type: GraphQLString
            },

        },
        async resolve(parent, args) {

            let mandate = await Mandate.findById(args.id)
            mandate.si = args.si
            mandate.save();
            return mandate

            // await Output.updateMany({
            //     mandateId: mandate._id
            // }, {
            //     $set: {
            //         mdaId: args.mda
            //     }
            // })
            // await Indicator.updateMany({
            //     mandateId: mandate._id
            // }, {
            //     $set: {
            //         mdaId: args.mda
            //     }
            // })
        }
    },
    uploadDevs: {
        type: MandateType,
        args: {
            data: {
                type: GraphQLString
            },

        },
        async resolve(parent, args) {
            //console.log(args);
            let data = JSON.parse(args.data)
            console.log(args.data);

        }
    },
}


module.exports = mandateMutations;