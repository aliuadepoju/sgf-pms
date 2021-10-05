import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql';






const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        permissions: {
            type: new GraphQLNonNull(GraphQLString),
            resolve(parent, args) {
                return JSON.stringify(parent.permissions)
            }
        },
    })
});
module.exports = RoleType;