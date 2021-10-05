import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';




const FileType = new GraphQLObjectType({
    name: 'Files',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        size: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        },
        fileUrl: {
            type: GraphQLString
        },
    })
});
module.exports = FileType;