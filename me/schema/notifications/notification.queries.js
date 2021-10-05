import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Notification from './notification.model';
import NotificationType from './notification.type';


const notificationQueries = {
    notification: {
        type: NotificationType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Notification.findById(args.id);
        }
    },
    deleteNotification: {
        type: NotificationType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Notification.findByIdAndRemove(args.id);
        }
    },
    notifications: {
        type: new GraphQLList(NotificationType),
        args: {},
        resolve(parent, args) {
            return Notification.find().sort({

            });
        }
    },
    changeNotificationStatus: {
        type: new GraphQLList(NotificationType),
        args: {
            id: {
                type: GraphQLID
            }
        },
        async resolve(parent, args) {
            let notn = await Notification.findById(args.id);
            notn.status = 'read';
            notn.save();
            return notn
        }
    },
    notificationsByMda: {
        type: new GraphQLList(NotificationType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Notification.find({
                mdaId: args.mdaId
            }).sort({
                createdAt: -1
            });
        }
    },
}
module.exports = notificationQueries;