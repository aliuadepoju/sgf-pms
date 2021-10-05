import graphql, {
    GraphQLInt
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Priority from './priority.model';
import PriorityType from './priority.type';
import Driver from '../indicators/driver.model';
import DriverType from '../indicators/driver.type';
import {
    type
} from 'os';


const PriorityQueries = {
    priority: {
        type: PriorityType,
        args: {
            id: {
                type: GraphQLID
            },
        },
        resolve(parent, args) {
            return Priority.findById(args.id);
        }
    },
    prioritiesDrivers: {
        type: new GraphQLList(DriverType),
        args: {
            id: {
                type: GraphQLID
            },
        },
        resolve(parent, args) {
            return Driver.find({
                priorityId: args.id
            });
        }
    },
    deletePriority: {
        type: PriorityType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Priority.findByIdAndRemove(args.id);
        }
    },

    priorities: {
        type: new GraphQLList(PriorityType),
        args: {
            tree: {
                type: GraphQLInt
            }
        },
        async resolve(parent, args) {

            // for await (const pri of prio) {
            //     pri.tag = 
            // }




            return Priority.find({
                tree: args.tree
            }).sort({
                order: 1

            });
        }
    },

}
module.exports = PriorityQueries;