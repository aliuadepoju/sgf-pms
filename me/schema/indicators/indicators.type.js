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
import Output from '../outputs/outputs.model';

const MdaType = new GraphQLObjectType({
    name: 'Mdaas',
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
const IndicatorType = new GraphQLObjectType({
    name: 'Outcomes',
    fields: () => ({
        id: {
            type: GraphQLID
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
        outputs: {
            type: new GraphQLList(OutputType),
            async resolve(parent, args) {
                return Output.find({
                    indicatorId: parent.id,

                });
            }
        },
        jobs: {
            type: new GraphQLList(OutputType),
            async resolve(parent, args) {
                return Output.find({
                    indicatorId: parent.id,
                    outputType: 'jobs'

                });
            }
        },
        gender: {
            type: new GraphQLList(OutputType),
            async resolve(parent, args) {
                return Output.find({
                    indicatorId: parent.id,
                    outputType: 'gender'
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
module.exports = IndicatorType;