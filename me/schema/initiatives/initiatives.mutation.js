import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import User from '../user/user.model';
import UserType from '../user/user.type';
import Initiative from './initiatives.model';
import InitiativeType from './initiatives.type';
import Activity from '../activity/activity.model';



const initiativeMutations = {
    createInitiative: {
        type: InitiativeType,
        args: {
            title: {
                type: GraphQLString
            },
            mdaId: {
                type: GraphQLID
            }

        },
        async resolve(parent, args) {

            let initiative = new Initiative({
                title: args.title,
                mdaId: args.mdaId,


            });

            return initiative.save();
        }
    },
}


module.exports = initiativeMutations;