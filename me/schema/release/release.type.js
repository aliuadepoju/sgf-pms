import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

const Mda = require('../mdas/mdas.model');

const MdaType = require('../mdas/mdas.type');


const ReleaseType = new GraphQLObjectType({
    name: 'Releases',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        quarter: {
            type: GraphQLString,
        },
        budget: {
            type: GraphQLString,
        },

        released: {
            type: GraphQLString,
        },
        utilized: {
            type: GraphQLString,
        },

        year: {
            type: GraphQLString,
        },
        mdaId: {
            type: GraphQLID
        },

        mda: {
            type: MdaType,
            resolve(parent, args) {
                return Mda.findById(parent.mdaId);
            }
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
module.exports = ReleaseType;