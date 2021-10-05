import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Mandate from './mandates.model';
import MandateType from './mandates.type';


const MandateQueries = {
    mandate: {
        type: MandateType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Mandate.findById(args.id);
        }
    },
    deleteMandate: {
        type: MandateType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Mandate.findByIdAndRemove(args.id);
        }
    },
    searchMandates: {
        type: new GraphQLList(MandateType),
        args: {
            search: {
                type: GraphQLString
            },


        },
        async resolve(parent, args) {
            // console.log('/' + args.search + '/');

            let mandates = await Mandate.find({
                title: {
                    $regex: args.search,
                    $options: 'i'
                }
            })


            return mandates
        }
    },

    mandates: {
        type: new GraphQLList(MandateType),
        args: {},
        resolve(parent, args) {

            return Mandate.find({
                // outputId: {
                //     $exists: true
                // }
            }).sort({

            });
        }
    },

}
module.exports = MandateQueries;