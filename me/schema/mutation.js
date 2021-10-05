const graphql = require('graphql');

const {
    GraphQLObjectType
} = graphql;
let userMutations = require('./user/user.mutation');

// let drawMutations = require('./draws/draw.mutation');
let priorityMutations = require('./priority/priority.mutation');
let mandateMutations = require('./mandates/mandates.mutation');
let indicatorsMutations = require('./indicators/indicators.mutation');
let initiativesMutations = require('./initiatives/initiatives.mutation');
let outputsMutations = require('./outputs/outputs.mutation');
let rolesMutations = require('./roles/roles.mutation');
let projectMutations = require('./projects/projects.mutation');
let logframesMutations = require('./logframes/logframes.mutation');
let NotificationMutations = require('./notifications/notification.mutation');
let releaseMutations = require('./release/release.mutation');
let budgetMutations = require('./budget/budget.mutation');
let contractMutations = require('./contract/contract.mutation');
let contractorMutations = require('./contractor/contractor.mutation');

let activityMutations = require('./activity/activity.mutation');

let mutation = {

}

mutation = Object.assign(userMutations, budgetMutations, contractMutations, contractorMutations, releaseMutations, projectMutations, NotificationMutations, logframesMutations, initiativesMutations, outputsMutations, mandateMutations, rolesMutations, activityMutations, priorityMutations, indicatorsMutations)

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: mutation

});

module.exports = Mutation