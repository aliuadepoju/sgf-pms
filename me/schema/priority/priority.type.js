import graphql from 'graphql';


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
import MandateType from '../mandates/mandates.type';
import Mandate from '../mandates/mandates.model';
import MdaType from '../mdas/mdas.type';
import Mda from '../mdas/mdas.model';
import IndicatorType from '../indicators/indicators.type';
import Indicator from '../indicators/indicators.model';
import LeadingType from '../indicators/leading.type';
import Leading from '../indicators/leading.model';
import DriverType from '../indicators/driver.type';
import Driver from '../indicators/driver.model';
import OutputType from '../outputs/outputs.type';
import Output from '../outputs/outputs.model';
const PriorityType = new GraphQLObjectType({
    name: 'Priorities',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        order: {
            type: GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        tag: {
            type: GraphQLString
        },
        tree: {
            type: GraphQLInt
        },
        mdas: {
            type: GraphQLString,
            resolve(parent, args) {
                return JSON.stringify(parent.mdas)
            }
        },
        mdasList: {
            type: new GraphQLList(MdaType),
            resolve(parent, args) {

                return Mda.find({
                    '_id': {
                        $in: parent.mdas
                    }
                });
            }
        },
        order: {
            type: GraphQLInt
        },
        drivers: {
            type: new GraphQLList(DriverType),
            async resolve(parent, args) {
                return Driver.find({
                    priorityId: parent.id
                });
            }
        },
        leading: {
            type: new GraphQLList(LeadingType),
            async resolve(parent, args) {
                return Leading.find({
                    priorityId: parent.id
                });
            }
        },
        lIndicators: {
            type: new GraphQLList(IndicatorType),
            async resolve(parent, args) {
                let data = []

                let leading = await Leading.find({
                    priorityId: parent.id
                });
                for await (const item of leading) {
                    // item.tree = parent.tree
                    // item.save();
                    let indicator = await Indicator.find({
                        leadingId: item.id
                    });

                    indicator.driver = item.driver
                    if (indicator.length > 0) data = await [...data, ...indicator]
                }
                return data;
                // return Indicator.find({
                //     priorityId: parent.id
                // });
            }
        },
        indicators: {
            type: new GraphQLList(IndicatorType),
            async resolve(parent, args) {
                let ind = await Indicator.find({
                    priorityId: parent.id
                });
                return ind
            }
        },
        outputs: {
            type: new GraphQLList(OutputType),
            async resolve(parent, args) {
                let data = []
                let indicators = await Indicator.find({
                    priorityId: parent.id
                });
                for await (const item of indicators) {

                    let output = await Output.find({
                        indicatorId: item.id
                    });

                    if (output.length > 0) data = await [...data, ...output]
                }
                return data;
            }
        },
        mandates: {
            type: new GraphQLList(MandateType),
            resolve(parent, args) {
                return Mandate.find({
                    priorityId: parent.id
                });
            }
        }
    })
});
module.exports = PriorityType;