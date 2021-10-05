import graphql from 'graphql'

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
}
from 'graphql';


import UserType from './user.type'

const UserAuthType = new GraphQLObjectType({
    name: 'UsersAuth',
    fields: () => ({

        token: {
            type: GraphQLString
        },
        user: {
            type: UserType
        }


    })
});
const UserPasswordType = new GraphQLObjectType({
    name: 'UsersAuth',
    fields: () => ({

        token: {
            type: GraphQLString
        },
        user: {
            type: UserType
        }


    })
})
module.exports = {
    UserAuthType,
    UserPasswordType
};