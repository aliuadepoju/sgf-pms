import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';


import StatsType from './stats.type';
import Mda from '../mdas/mdas.model';
import Output from '../outputs/outputs.model';
import Project from '../projects/projects.model';


const statsQueries = {
    stats: {
        type: StatsType,
        args: {

        },
        resolve(parent, args) {
            return {};
        }
    },

    mdasByPerformance: {
        type: StatsType,
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        async resolve(parent, args) {
            let mdas = await Mda.find().sort({
                shortcode: 1
            });


            let data = [];
            for await (let el of mdas) {

                let mda = {}
                mda.id = el._id;
                mda.name = el.name;
                mda.shortcode = el.shortcode
                mda.onTrack = 0
                mda.inProgress = 0
                mda.slow = 0
                // let out = Output.find({
                //     mdaId: el.id
                // })
                data.push(mda);


            }
            //console.log(data);
            return {
                data: JSON.stringify(data)
            };
        }
    },

    financials: {
        type: StatsType,
        async resolve(parent, args) {
            let fin = {}
            fin.budget = 1960320547535
            fin.released = 1949938291232
            fin.utilized = 1444935583182
            return {
                data: JSON.stringify(fin)
            }
        }
    },
    finProjectsByMdas: {
        type: StatsType,
        async resolve(parent, args) {
            let fin = {}
            let mdas = await Mda.find();


            let data = [];
            for await (let el of mdas) {

                let mda = {}
                mda.id = el._id;
                mda.name = el.shortcode.toUpperCase();
                let projectsLength = await Project.find({
                    mdaId: el._id
                }).countDocuments();
                let notStarted = await Project.find({
                    mdaId: el._id,
                    status: 'Not Started'
                }).countDocuments();
                // mda.total = Math.floor(Math.random() * (50 - 20 + 1) + 20);
                // mda.actual = Math.floor(Math.random() * (19 - 1 + 1) + 1);
                mda.total = projectsLength;
                mda.actual = projectsLength - notStarted;
                data.push(mda);


            }
            let dat = await data.sort((a, b) => {
                return b.total - a.total
            })
            console.log(dat);
            return {
                data: JSON.stringify(dat)
            };

            return {
                data: JSON.stringify(fin)
            }
        }
    },
    finPoliciesByMdas: {
        type: StatsType,
        async resolve(parent, args) {
            let fin = {}
            let mdas = await Mda.find();


            let data = [];
            for await (let el of mdas) {

                let mda = {}
                mda.id = el._id;
                mda.name = el.name;
                // let projectsLength  = 
                // mda.total = Math.floor(Math.random() * (50 - 20 + 1) + 20);
                // mda.actual = Math.floor(Math.random() * (19 - 1 + 1) + 1);
                mda.total = 0;
                mda.actual = 0;
                data.push(mda);


            }
            //console.log(data);
            return {
                data: JSON.stringify(data)
            };

            return {
                data: JSON.stringify(fin)
            }
        }
    },

    avgBudgetPerPriority: {
        type: StatsType,
        args: {

        },
        resolve(parent, args) {
            return {};
        }
    },
    avgBudgetPerMda: {
        type: StatsType,
        args: {

        },
        resolve(parent, args) {
            return {};
        }
    },
    avgResultPerPriority: {
        type: StatsType,
        args: {

        },
        resolve(parent, args) {
            return {};
        }
    },
    avgResultPerMda: {
        type: StatsType,
        args: {

        },
        resolve(parent, args) {
            return {};
        }
    },

}
module.exports = statsQueries;