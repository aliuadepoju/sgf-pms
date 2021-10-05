import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

import Priority from './priority.model';
import priorityType from './priority.type';
// import Activity from '../activity/activity.model';



const priorityMutations = {
    createPriority: {
        type: priorityType,
        args: {
            title: {
                type: GraphQLString
            },

            userId: {
                type: GraphQLID
            },
            mandateId: {
                type: GraphQLID
            },
        },
        async resolve(parent, args) {

            let dv = new Priority({
                title: args.title,

            });

            return dv.save();
        }
    },
    selectContributingMdas: {
        type: priorityType,
        args: {
            prorityId: {
                type: GraphQLID
            },

            mdas: {
                type: GraphQLString
            }

        },
        async resolve(parent, args) {
            let pt = {
                mdas: JSON.parse(args.mdas)
            };
            return Priority.findByIdAndUpdate(args.prorityId, pt, {
                new: true
            });
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




module.exports = priorityMutations;