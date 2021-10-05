import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';




const ActvityType = new GraphQLObjectType({
    name: 'Actvities',
    fields: () => ({
        id: {
            type: GraphQLID
        },


        text: {
            type: GraphQLString
        },
        operation: {
            type: GraphQLString
        },

        userId: {
            type: GraphQLID
        },
        createdAt: {
            type: GraphQLString
        },
        platform: {
            type: GraphQLString
        },

    })
});
module.exports = ActvityType;