import graphql from 'graphql';


import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql';
import IndicatorType from '../indicators/indicators.type';
import Indicator from '../indicators/indicators.model';
import OutputType from '../outputs/outputs.type';
import Output from '../outputs/outputs.model';

const MdaType = new GraphQLObjectType({
    name: 'Mdas',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        shortcode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        indicators: {
            type: new GraphQLList(IndicatorType),
            async resolve(parent, args) {
                return Indicator.find({
                    mdaId: parent.id
                });
            }
        },
        outputs: {
            type: new GraphQLList(OutputType),
            async resolve(parent, args) {
                let data = []
                let indicators = await Indicator.find({
                    mdaId: parent.id
                });
                for await (const item of indicators) {

                    let output = await Output.find({
                        indicatorId: item.id
                    });
                    if (output.length > 0) data = await [...data, ...output]
                }
                return data;
            }
        }
    })
});



module.exports = MdaType;