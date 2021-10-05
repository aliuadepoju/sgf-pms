const graphql = require('graphql');

const {
    GraphQLObjectType
} = graphql;
let userQueries = require('./user/user.queries');

// let itemQueries = require('./item/item-queries');
// let drawQueries = require('./draws/draw.queries');

let mandateQueries = require('./mandates/mandates.queries');
let priorityQueries = require('./priority/priority.queries');
let actQueries = require('./activity/activity.queries');
let statsQueries = require('./stats/stats.queries');
let rolesQueries = require('./roles/roles.queries');
let ProjectQueries = require('./projects/projects.queries');
let mdasQueries = require('./mdas/mdas.queries');
let outputsQueries = require('./outputs/outputs.queries');
let indicatorQueries = require('./indicators/indicators.queries');
let initiativesQueries = require('./initiatives/initiatives.queries');
let logframesQueries = require('./logframes/logframes.queries');
let notificationsQueries = require('./notifications/notification.queries');
let budgetQueries = require('./budget/budget.queries');
let releaseQueries = require('./release/release.queries');
let contractQueries = require('./contract/contract.queries');
let contractorQueries = require('./contractor/contractor.queries');


// let activityQueries = require('./activity/activity-queries');
let queries = {}
queries = Object.assign(userQueries, contractQueries, contractorQueries, indicatorQueries, logframesQueries, budgetQueries, releaseQueries, notificationsQueries, outputsQueries, initiativesQueries, priorityQueries, mdasQueries, ProjectQueries, rolesQueries, actQueries, statsQueries, mandateQueries);


const RootQuery = new GraphQLObjectType({
    name: 'Queries',
    fields: queries

});
module.exports = RootQuery