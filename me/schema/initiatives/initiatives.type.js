import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import User from '../user/user.model';
import UserType from '../user/user.type';
import {
    ProjectType
} from '../projects/projects.type';
import Project from '../projects/projects.model';


const InitiativeType = new GraphQLObjectType({
    name: 'Initiatives',
    fields: () => ({
        id: {
            type: GraphQLID
        },

        title: {
            type: GraphQLString
        },

        // projects: {
        //     type: new GraphQLList(ProjectType),
        //     resolve(parent, args) {
        //         return Project.find({
        //             initiativeId: parent.id
        //         });
        //     }
        // }

    })
});
module.exports = InitiativeType;