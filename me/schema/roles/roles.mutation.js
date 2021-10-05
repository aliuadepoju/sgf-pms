import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';


import RoleType from './roles.type';
import Role from './roles.model';


const rolesMutations = {
    createRoles: {
        type: RoleType,
        args: {

            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            permissions: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve(parent, args) {
            let role = new Role({
                name: args.name,
                permissions: JSON.parse(args.permissions)
            });
            return role.save();
        }
    },
    editRoles: {
        type: RoleType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            permissions: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve(parent, args) {
            let role = {
                name: args.name,
                permissions: JSON.parse(args.permissions)
            };
            return Role.findByIdAndUpdate(args.id, role, {
                new: true
            });
        }
    },

}
module.exports = rolesMutations;