import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';


import RoleType from './roles.type';
import Role from './roles.model';


const rolesQueries = {
    roles: {
        type: new GraphQLList(RoleType),
        args: {

        },
        resolve(parent, args) {
            return Role.find();
        }
    },
    deleteRole: {
        type: RoleType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Role.findByIdAndRemove(args.id);
        }
    },
}
module.exports = rolesQueries;