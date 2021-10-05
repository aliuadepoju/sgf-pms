import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} from 'graphql';

import User from '../user/user.model';
import UserType from '../user/user.type';

import Mda from '../mdas/mdas.model';
import OutputType from '../outputs/outputs.type';
import IndicatorType from '../indicators/indicators.type';
import Indicator from '../indicators/indicators.model';
import Output from '../outputs/outputs.model';

const MdaType = new GraphQLObjectType({
    name: 'Mdaass',
    fields: () => ({
        id: {
            type: GraphQLID
        },

        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
       
        shortcode: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})
const LeadingType = new GraphQLObjectType({
    name: 'Leading',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        tag: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        tag: {
            type: GraphQLString
        },
        driver: {
            type: GraphQLString
        },
        datasource: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        ref: {
            type: GraphQLInt
        },
        unitType: {
            type: GraphQLString

        },
        unit: {
            type: GraphQLString

        },

        baseline: {
            type: GraphQLString
        },
        actual: {
            type: GraphQLString
        },
        target: {
            type: GraphQLString
        },
        aggregation: {
            type: GraphQLString
        },
        rt: {
            type: GraphQLString
        },
        currency: {
            type: GraphQLString
        },
        score: {
            type: GraphQLFloat
        },
        active: {
            type: GraphQLInt
        },
        mdaId: {
            type: GraphQLID
        },
        priorityId: {
            type: GraphQLID

        },
        outcomes: {
            type: new GraphQLList(IndicatorType),
            async resolve(parent, args) {
                return Indicator.find({
                    leadingId: parent.id,

                });
            }
        },

        mda: {
            type: MdaType,
            resolve(parent, args) {
                return Mda.findById(parent.mdaId);
            }
        },
    })
});
module.exports = LeadingType;