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
import LeadingType from '../indicators/leading.type';
import Leading from '../indicators/leading.model';
import Output from '../outputs/outputs.model';


const DriverType = new GraphQLObjectType({
    name: 'Driver',
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

        leading: {
            type: new GraphQLList(LeadingType),
            resolve(parent, args) {
                return Leading.find({
                    driverId: parent.id
                });
            }
        },
    })
});
module.exports = DriverType;