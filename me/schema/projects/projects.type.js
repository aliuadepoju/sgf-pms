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
    GraphQLBoolean
} from 'graphql';

import User from '../user/user.model';
// import UserType from '../user/user.type';
import Logframes from '../logframes/logframes.model';
// import LogframesType from '../logframes/logframes.type';
import Output from '../outputs/outputs.model';
// import OutputType from '../outputs/outputs.type';
// import Contract from '../contract/contract.model';
// import ContractType from '../contract/contract.type';
// import Indicator from '../indicators/indicators.model';
// import IndicatorType from '../indicators/indicators.type';
// import Indicator from '../indicators/indicators.model';
// import IndicatorType from '../indicators/indicators.type';
import Mandate from '../mandates/mandates.model';
// import MandateType from '../mandates/mandates.type';
// import Initiative from '../initiatives/initiatives.model';
// import InitiativeType from '../initiatives/initiatives.type';
// import MdaType from '../mdas/mdas.type';
import Mda from '../mdas/mdas.model';

const MdaType = new GraphQLObjectType({
    name: 'Mdasassdws',
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


const ProjectEdgeType = new GraphQLObjectType({
    name: 'ProjectEdge',
    fields: () => ({
        cursor: {
            type: GraphQLString
        },
        node: {
            type: ProjectType
        }
    })
});
const ProjectPageInfoType = new GraphQLObjectType({
    name: 'ProjectPageInfo',
    fields: () => ({
        startCursor: {
            type: GraphQLString
        },
        endCursor: {
            type: GraphQLString
        },
        hasNextPage: {
            type: GraphQLBoolean
        },
        hasPreviousPage: {
            type: GraphQLBoolean
        }
    })
});
const ProjectListType = new GraphQLObjectType({
    name: 'ProjectList',
    fields: () => ({
        edges: {
            type: new GraphQLList(ProjectEdgeType),
        },
        pageInfo: {
            type: ProjectPageInfoType
        },
        totalCount: {
            type: GraphQLInt
        }
    })
});
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        puid: {
            type: GraphQLString
        },

        title: {
            type: GraphQLString
        },

        ref: {
            type: GraphQLInt
        },
        budget: {
            type: GraphQLFloat
        },  variationCost:  {
            type: GraphQLString
        },
        fundingSource: {
            type: GraphQLString
        },
        appropriated:  {
            type: GraphQLInt
        },
        planned_milestone:  {
            type: GraphQLInt
        },
        actual_milestone:  {
            type: GraphQLInt
        },
        approvalDate:  {
            type: GraphQLInt
        },
        cost: {
            type: GraphQLFloat
        },
        fecId: {
            type: GraphQLString
        },
        type: {
            type: GraphQLInt
        },
        images: {
            type: GraphQLString
        },
        longitude: {
            type: GraphQLString
        },
        latitude: {
            type: GraphQLString
        },
        start_date: {
            type: GraphQLString
        },
        end_date: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        lga: {
            type: GraphQLString
        },
        variationCost: {
            type: GraphQLString
        },
        fundingSource: {
            type: GraphQLString
        },
        appropriated: {
            type: GraphQLString
        },
        planned_milestone: {
            type: GraphQLString
        },
        actual_milestone: {
            type: GraphQLString
        },
        approvalDate: {
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
        userId: {
            type: GraphQLID
        },
        //     contract: {

        //         type: ContractType,
        //         resolve(parent, args) {
        //             return Contract.findById(parent.contractId);
        //         }

        //     },
        output: {

            type: require('../outputs/outputs.type'),
            resolve(parent, args) {
                return Output.findById(parent.outputId);
            }

        },
        //     indicator: {
        //         type: IndicatorType,
        //         resolve(parent, args) {
        //             return Indicator.find({
        //                 indicatorId: parent.indicatorId
        //             });
        //         }

        //     },
        mandate: {
            type: require('../mandates/mandates.type'),
            async resolve(parent, args) {

                return Mandate.findById(parent.mandateId);
            }
        },
        //     initiative: {
        //         type: InitiativeType,
        //         resolve(parent, args) {
        //             return Initiative.findById(
        //                 parent.initiativeId
        //             );
        //         }

        //     },
        logframes: {
            type: new GraphQLList(require('../logframes/logframes.type')),
            resolve(parent, args) {
                return Logframes.find({
                    projectId: parent.id
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
module.exports = {
    ProjectType,
    ProjectListType
};