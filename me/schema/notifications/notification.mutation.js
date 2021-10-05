import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Notification from './notification.model';
import NotificationType from './notification.type';



const notificationMutations = {
    createNotification: {
        type: NotificationType,
        args: {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        resolve(parent, args) {
            let notification = new Notification({
                title: args.title,
                slug: args.title.replace(/\s+/g, '-').toLowerCase()
            });
            return notification.save();
        }
    },
    editNotification: {
        type: NotificationType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve(parent, args) {
            let notification = {
                title: args.title,
                slug: args.title.replace(/\s+/g, '-').toLowerCase()
            };

            return Notification.findByIdAndUpdate(args.id, notification, {
                new: true
            });
        },
    },

}




module.exports = notificationMutations;