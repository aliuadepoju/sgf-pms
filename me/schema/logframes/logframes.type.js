import graphql, {
    GraphQLFloat
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
const ProjectType = new GraphQLObjectType({
    name: 'projectLogfrsmr',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
    })
});

const LogframeType = new GraphQLObjectType({
    name: 'LogframesData',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        comments: {
            type: GraphQLString
        },
        challenges: {
            type: GraphQLString
        },
        outputValue: {
            type: GraphQLInt
        },

        longitude: {
            type: GraphQLString
        },
        latitude: {
            type: GraphQLString
        },
        images: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString
        },
        qow: {
            type: GraphQLInt
        },
        loc: {

            type: GraphQLFloat

        },
        type: {

            type: GraphQLString,


        },
        budget: {

            type: GraphQLString
        },
        approved: {

            type: GraphQLFloat
        },
        released: {

            type: GraphQLFloat
        },
        utilized: {

            type: GraphQLFloat
        },
        output: {
            type: OutputType,
            resolve(parent, args) {
                return Output.findById(parent.outputId);
            }
        },
        mda: {
            type: MdaType,
            resolve(parent, args) {
                return Mda.findById(parent.mdaId);

            }
        },
        project: {
            type: ProjectType,
            resolve(parent, args) {
                return Project.findById(
                    parent.projectId
                );
            }
        },
        logframeStatus: {
            type: GraphQLString
        },
    })
});
module.exports = LogframeType;