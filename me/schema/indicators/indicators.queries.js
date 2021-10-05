import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Indicator from './indicators.model';
import IndicatorType from './indicators.type';
import Driver from './driver.model';
import DriverType from './driver.type';
import Leading from './leading.model';
import LeadingType from './leading.type';

const IndicatorQueries = {
    indicators: {
        type: IndicatorType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Indicator.findById(args.id);
        }
    },
    indicatorsByMda: {
        type: new GraphQLList(IndicatorType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Indicator.find({
                mdaId: args.mdaId
            });
        }
    },
    deleteIndicator: {
        type: IndicatorType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Indicator.findByIdAndRemove(args.id);
        }
    },

    deleteDriver: {
        type: DriverType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Driver.findByIdAndRemove(args.id);
        }
    },
    deleteLeading: {
        type: LeadingType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Leading.findByIdAndRemove(args.id);
        }
    },
    indicators: {
        type: new GraphQLList(IndicatorType),
        args: {},
        resolve(parent, args) {
            return Indicator.find().sort({

            });
        }
    },

}
module.exports = IndicatorQueries;