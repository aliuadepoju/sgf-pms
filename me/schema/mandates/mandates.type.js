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
import IndicatorType from '../indicators/indicators.type';
import Indicator from '../indicators/indicators.model';
import Output from '../outputs/outputs.model';
import Project from '../projects/projects.model';
import {
    ProjectType
} from '../projects/projects.type';
import MdaType from '../mdas/mdas.type';
import Mda from '../mdas/mdas.model';

const MandateType = new GraphQLObjectType({
    name: 'Mandates',
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
        si: {
            type: GraphQLString
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
        projectsTotal: {
            type: GraphQLInt,
            async resolve(parent, args) {
                let no = await Project.find({
                    mandateId: parent.id
                }).countDocuments();
                console.log(no);

                return no;
            }
        },
        subTotal: {
            type: GraphQLInt,
            async resolve(parent, args) {
                let all
                if (parent.si) {
                    all = await JSON.parse(parent.si);
                } else {
                    all = []
                }
                return all.length;
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find({
                    mandateId: parent.id
                });
            }
        },
        indicators: {
            type: new GraphQLList(IndicatorType),
            resolve(parent, args) {
                return Indicator.find({
                    mandateId: parent.id
                });
            }
        },
        outputs: {
            type: new GraphQLList(require('../outputs/outputs.type')),
            resolve(parent, args) {
                return Output.find({
                    mandateId: parent.id
                });
            }
        }
    })
});
module.exports = MandateType;