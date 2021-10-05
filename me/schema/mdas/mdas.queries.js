import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';


import MdaType from './mdas.type';
import Mda from './mdas.model';


const mdasQueries = {
    mda: {
        type: MdaType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Mda.findById(args.id);
        }
    },
    mdaByShortcode: {
        type: MdaType,
        args: {
            shortcode: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return Mda.findOne({
                shortcode: args.shortcode
            });
        }
    },

    mdas: {
        type: new GraphQLList(MdaType),
        args: {

        },
        resolve(parent, args) {
            return Mda.find().sort({
                shortcode: 1
            });
        }
    },

}

module.exports = mdasQueries;