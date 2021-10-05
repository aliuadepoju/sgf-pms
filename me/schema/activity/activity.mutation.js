import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInputObjectType
} from 'graphql';
import Activity from './activity.model';
import ActivityType from './activity.type';

const activityInputType = new GraphQLInputObjectType({
    name: 'activityInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },

        type: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        },

        operation: {
            type: new GraphQLNonNull(GraphQLString)
        },

        userId: {
            type: GraphQLID
        },
        platform: {
            type: GraphQLString
        },
    })
});

const activityMutations = {
    createActivity: {
        type: ActivityType,
        args: {
            activityInput: {
                type: new GraphQLNonNull(activityInputType)
            },

        },
        resolve(parent, args) {
            let data = args.activityInput
            let activity = new Activity({
                // type: data.type,
                text: data.text,
                operation: data.operation,
                device: data.device,
                userId: data.userId,
            })
            return activity.save();
        }
    },
    // editActivity: {
    //     type: ActivityType,
    //     args: {
    //         id: {
    //             type: new GraphQLNonNull(GraphQLID)
    //         },
    //         title: {
    //             type: new GraphQLNonNull(GraphQLString)
    //         },
    //     },
    //     resolve(parent, args) {
    //         let activity = {
    //             title: args.title,
    //             slug: args.title.replace(/\s+/g, '-').toLowerCase()
    //         };

    //         return Activity.findByIdAndUpdate(args.id, activity, {
    //             new: true
    //         });
    //     },
    // },

}




module.exports = activityMutations;