import graphql, {
    GraphQLString
} from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';
import User from './user.model';
import UserType from './user.type';

const userQueries = {
    user: {
        type: UserType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return User.findById(args.id);
        }
    },
    userByName: {
        type: UserType,
        args: {
            name: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            //console.log(args.name);

            return User.findOne({
                name: args.name
            });
        }
    },
    users: {
        type: new GraphQLList(UserType),
        args: {},
        resolve(parent, args) {

            return User.find({})
        }
    },

}
module.exports = userQueries;