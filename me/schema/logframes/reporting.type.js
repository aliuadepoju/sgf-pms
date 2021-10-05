import graphql, {
    GraphQLBoolean
} from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql';

import User from '../user/user.model';
import UserType from '../user/user.type';
import Mda from '../mdas/mdas.model';
import MdaType from '../mdas/mdas.type';
import Output from '../outputs/outputs.model';
import OutputType from '../outputs/outputs.type';
import Project from '../projects/projects.model';


const ReportType = new GraphQLObjectType({
    name: 'Reports',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        uid: {
            type: GraphQLInt
        },
        status: {
            type: GraphQLBoolean
        },

        mdaId: {
            type: GraphQLID
        },
        createdAt: {
            type: GraphQLString
        }
    })
});
module.exports = ReportType;