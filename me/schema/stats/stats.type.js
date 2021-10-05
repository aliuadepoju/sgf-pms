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
import Activity from '../activity/activity.model';





const StatsType = new GraphQLObjectType({
    name: 'Stats',
    fields: () => ({
        data: {
            type: GraphQLString,
        },


    })
});
module.exports = StatsType;