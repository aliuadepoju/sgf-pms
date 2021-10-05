import graphql, {
    GraphQLInputObjectType
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} from 'graphql';

import Indicator from './indicators.model';
import IndicatorsType from './indicators.type';
import Leading from './leading.model';
import Driver from './driver.model';
import LeadingType from './leading.type';
// import Activity from '../activity/activity.model';

const indicatorInputType = new GraphQLInputObjectType({
    name: 'indicatorInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        ref: {
            type: GraphQLInt
        },
        driver: {
            type: GraphQLString
        },
        currency: {
            type: GraphQLString
        },
        active: {
            type: GraphQLInt
        },

        title: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        datasource: {
            type: GraphQLString
        },
        priorityId: {
            type: GraphQLID
        },
        driverId: {
            type: GraphQLID

        },
        leadingId: {
            type: GraphQLID
        },
        mandateId: {
            type: GraphQLID
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
        unitType: {
            type: GraphQLString

        },
        unit: {
            type: GraphQLString

        },
        aggregation: {
            type: GraphQLString
        },
        rt: {
            type: GraphQLString
        },
        mdaId: {
            type: GraphQLID
        },

    })
});

const indicatorsMutations = {
    createIndicator: {
        type: IndicatorsType,
        args: {
            indicatorInput: {
                type: new GraphQLNonNull(indicatorInputType)
            }
        },
        async resolve(parent, args) {
            //console.log(args);
            let data = await args.indicatorInput
            if (data.driverId == null) {
                let driver = new Driver({
                    priorityId: data.priorityId,
                    title: data.driver
                });
                driver.save();
                data.driverId = driver._id
            }
            let indicator = new Indicator({
                title: data.title,
                mdaId: data.mdaId,
                baseline: data.baseline,
                target: data.target,
                datasource: data.datasource,
                priorityId: data.priorityId,
                leadingId: data.leadingId,
                mandateId: data.mandateId,
                aggregation: data.aggregation,
                // driver: data.driver,
                rt: data.rt,
                type: data.type,
                actual: data.actual,
                unit: data.unit,
                unitType: data.unitType,

            })

            //console.log(indicator);
            await indicator.save();

            return indicator;

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: args.device,
            //     userId: args.userId,
            // })

        }
    },
    editIndicator: {
        type: IndicatorsType,
        args: {
            indicatorInput: {
                type: new GraphQLNonNull(indicatorInputType)
            }
        },
        async resolve(parent, args) {
            let data = args.indicatorInput



            let indicator = {
                title: data.title,
                mdaId: data.mdaId,
                type: data.type,
                unit: data.unit,
                unitType: data.unitType,
                baseline: data.baseline,
                driver: data.driver,
                datasource: data.datasource,
                actual: data.actual,
                target: data.target,
                rt: data.rt,
                aggregation: data.aggregation,

            };
            return Indicator.findByIdAndUpdate(data.id, indicator, {
                new: true
            });
        }
    },
    createLeading: {
        type: LeadingType,
        args: {
            indicatorInput: {
                type: new GraphQLNonNull(indicatorInputType)
            }
        },
        async resolve(parent, args) {
            //console.log(args);
            let data = await args.indicatorInput
            if (data.driverId == null) {
                let driver = new Driver({
                    priorityId: data.priorityId,
                    title: data.driver
                });
                driver.save();
                data.driverId = driver._id
            }
            let indicator = new Leading({
                title: data.title,
                mdaId: data.mdaId,
                baseline: data.baseline,
                target: data.target,
                datasource: data.datasource,
                priorityId: data.priorityId,
                mandateId: data.mandateId,
                aggregation: data.aggregation,
                // driver: data.driver,
                driverId: data.driverId,
                rt: data.rt,
                type: data.type,
                actual: data.actual,
                unit: data.unit,
                unitType: data.unitType,



            })

            console.log(indicator);
            await indicator.save();

            return indicator;

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Deposited",
            //     operation: "Deposit",
            //     device: args.device,
            //     userId: args.userId,
            // })

        }
    },
    editLeading: {
        type: LeadingType,
        args: {
            indicatorInput: {
                type: new GraphQLNonNull(indicatorInputType)
            }
        },
        async resolve(parent, args) {
            let data = args.indicatorInput
            await Driver.findByIdAndUpdate(data.driverId, {
                title: data.driver
            }, {
                new: true
            });
            let indicator = {
                title: data.title,
                mdaId: data.mdaId,
                unit: data.unit,
                unitType: data.unitType,
                baseline: data.baseline,
                datasource: data.datasource,
                actual: data.actual,
                target: data.target,
                rt: data.rt,
                aggregation: data.aggregation,

            };
            return Leading.findByIdAndUpdate(data.id, indicator, {
                new: true
            });
        }
    },



}




module.exports = indicatorsMutations;