import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';




const CategoryType = new GraphQLObjectType({
    name: 'Categories',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        slug: {
            type: GraphQLString
        },

        // items: {
        //     type: new GraphQLList(ItemType),
        //     resolve(parent, args) {
        //         return Item.find({
        //             categoryId: parent.id
        //         });
        //     }
        // }
    })
});
module.exports = CategoryType;