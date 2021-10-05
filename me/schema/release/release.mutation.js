import graphql, {
    GraphQLObjectType,
    BREAK
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Release from './release.model';
import ReleaseType from './release.type';

const StatusType = new GraphQLObjectType({
    name: 'Success',
    fields: () => ({
        status: {
            type: GraphQLString
        },
    })
})

const releaseMutations = {
    createRelease: {
        type: StatusType,
        args: {
            release_data: {
                type: new GraphQLNonNull(GraphQLString)
            },
            quarter: {
                type: GraphQLString
            },
            year: {
                type: GraphQLString
            },

        },
        async resolve(parent, args) {
            let release_data = JSON.parse(args.release_data);
            let release = []

            console.log(args);

            release_data.forEach(element => {
                let data = {}
                data.quarter = args.quarter
                data.budget = element.budget
                data.title = element.title
                data.released = element.released
                data.utilized = element.utilized
                data.year = args.year
                data.mdaId = element.mdaId
                release.push(data);
            });
            // console.log(release);

            await Release.insertMany(release);
            return {
                status: 'Success'
            }

        }
    },


}




module.exports = releaseMutations;