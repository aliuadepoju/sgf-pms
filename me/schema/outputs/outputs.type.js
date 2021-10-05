import graphql, {
    GraphQLFloat
} from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
// import MandateType from '../mandates/mandates.type';
import Mandate from '../mandates/mandates.model';
import Project from '../projects/projects.model';
import {
    ProjectType
} from '../projects/projects.type';
import User from '../user/user.model';
import UserType from '../user/user.type';

import Mda from '../mdas/mdas.model';

const MdaType = new GraphQLObjectType({
    name: 'Mdasas',
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
// const ProjectType = new GraphQLObjectType({
//     name: 'Proj',
//     fields: () => ({
//         id: {
//             type: GraphQLID
//         },
//         title: {
//             type: new GraphQLNonNull(GraphQLString)
//         },
//         // loc: {
//         //     type: new GraphQLNonNull(GraphQLString)
//         // },
//         status: {
//             type: new GraphQLNonNull(GraphQLString)
//         },

//     })
// })

const ManType = new GraphQLObjectType({
    name: 'Man',

    fields: () => ({
        id: {
            type: GraphQLID
        },
        tag: {
            type: GraphQLString
        },
        projectCount: {
            type: GraphQLInt,
            resolve(parent, args) {
                return Project.find({
                    mandateId: parent._id
                }).countDocuments();
            }
        },
        title: {
            type: GraphQLString
        },
        si: {
            type: GraphQLString
        },
    })
});
const OutputType = new GraphQLObjectType({
    name: 'Output',
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
        ref: {
            type: GraphQLInt
        },
        tree: {
            type: GraphQLInt
        },
        type: {
            type: GraphQLString,
            resolve(parent, args) {
                if (parent.type == 'result') return 'quan'
                else return parent.type
            }
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
        actual2021: {
            type: GraphQLString
        },
        target: {
            type: GraphQLString,
            resolve(parent, args) {
                if (parent.targets == null)

                    return parent.target
                else
                    return parent.targets
            }
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
        datasource: {
            type: GraphQLString
        },
        active: {
            type: GraphQLInt
        },
        score: {
            type: GraphQLFloat
        },
        mdaId: {
            type: GraphQLID
        },
        mandates: {
            type: new GraphQLList(ManType),
            async resolve(parent, args) {
                let man = await Mandate.find({
                    _id: parent.mandateId
                });
                //console.log(man);

                return man;
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            async resolve(parent, args) {
                let man = await Project.find({
                    outputId: parent.id
                });
                // //console.log(man);

                return man;
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
module.exports = OutputType;