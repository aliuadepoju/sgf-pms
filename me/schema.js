const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean
} = graphql;


let RootQuery = require('./schema/query');
let Mutation = require('./schema/mutation');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
    // mutation: Mutation

});