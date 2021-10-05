import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';




const ContractorType = new GraphQLObjectType({
    name: 'Contractors',
    fields: () => ({
        id: {
            type: GraphQLID
        },

        name: {
            type: GraphQLString,
        },
        address: {
            type: GraphQLString,
        },
        state: {
            type: GraphQLString,
        },
        cacNo: {
            type: GraphQLString,
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
module.exports = ContractorType;