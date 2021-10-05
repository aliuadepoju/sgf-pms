import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

import MDAs from './mdas.model';
import MDAsType from './mdas.type';



const mdasMutations = {
    createMDAs: {
        type: MDAsType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            shortcode: {
                type: new GraphQLNonNull(GraphQLString)
        },
        resolve(parent, args) {
            let mdas = new MDAs({
                name: args.name,
                shortcode: args.shortcode,
            });
            return mdas.save();
        }
    },
    editMDAs: {
        type: MDAsType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            shortcode: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        resolve(parent, args) {
            let mdas = {
                name: args.name,
                shortcode: args.shortcode,
            };
            return MDAs.findByIdAndUpdate(args.id, mdas, {
                new: true
            });
        },
    },

},
}




module.exports = mdasMutations;