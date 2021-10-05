import graphql, {
    GraphQLObjectType
} from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql';

import Logframe from './logframes.model';
import MDA from '../mdas/mdas.model';
import Mandate from '../mandates/mandates.model';
import Reporting from './reporting.model';
import Project from '../projects/projects.model';
import LogframeType from './logframes.type';
// import Activity from '../activity/activity.model';

const StatusType = new GraphQLObjectType({
    name: 'StatusLog',
    fields: () => ({
        status: {
            type: GraphQLString
        },
    })
})
const logframeInputType = new GraphQLInputObjectType({
    name: 'logframeInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        comments: {
            type: GraphQLString
        },
        challenges: {
            type: GraphQLString
        },
        longitude: {
            type: GraphQLString
        },
        latitude: {
            type: GraphQLString
        },
        images: {
            type: GraphQLString

        },
        status: {
            type: GraphQLString
        },
        qow: {
            type: GraphQLInt
        },
        loc: {
            type: GraphQLInt
        },
        type: {

            type: GraphQLString
        },
        budget: {

            type: GraphQLString
        },
        approved: {

            type: GraphQLInt
        },
        released: {

            type: GraphQLInt
        },
        utilized: {

            type: GraphQLInt
        },
        mdaId: {

            type: GraphQLID

        },
        logframeId: {

            type: GraphQLID


        },
        outputValue: {
            type: GraphQLInt
        }
    })
})
const logframesMutations = {
    createLogframe: {
        type: LogframeType,
        args: {
            logframeInput: {
                type: logframeInputType
            }


        },
        async resolve(parent, args) {
            let data = args.logframeInput;
            let logframe = new Logframe({
                comments: data.comments,
                rating: data.rating,
                citizen: JSON.parse(data.citizen),
                longitude: data.longitude,
                latitude: data.latitude,
                // images: JSON.parse(data.images),
                status: data.status,
                qow: data.qow,
                loc: data.loc,
                type: data.type,
                budget: data.budget,
                approved: data.approved,
                released: data.released,
                utilized: data.utilized,
                mdaId: data.mdaId,
                challenges: data.challenges,
                outputValue: data.outputValue,
                outputId: project.outputId,
                reportId: project.reportId,
                projectId: data.projectId,
            })
            await logframe.save();

        }
    },
    uploadLogframe: {
        type: StatusType,

        args: {
            mdaId: {
                type: GraphQLID
            },
            report: {
                type: GraphQLString
            },
            projectData: {
                type: GraphQLString
            },
            logframeData: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let logframes = JSON.parse(args.logframeData);
            let report = Reporting.findOne({
                uid: args.report,
                mdaId: args.mdaId
            });

            let projects = JSON.parse(args.projectData);
            // console.log(projects);

            // for (let index = 0; index < logframes.length; index++) {
            //     let data = logframes[index];



            //     let project = await Project.findOne({
            //         puid: data.puid
            //     });

            //     // let logframe = new Logframe({
            //     //     comments: data.comments,
            //     //     challenges: data.challenges,
            //     //     rating: data.rating,
            //     //     citizen: data.citizen,
            //     //     longitude: data.longitude,
            //     //     latitude: data.latitude,
            //     //     budget: data.budget,
            //     //     approved: data.approved,
            //     //     released: data.released,
            //     //     utilized: data.utilized,
            //     //     // images: JSON.parse(data.images),
            //     //     status: data.status,
            //     //     qow: data.qow,
            //     //     loc: data.loc,
            //     //     type: data.type,
            //     //     mdaId: data.mdaId,
            //     //     outputValue: data.outputValue,
            //     //     outputId: project.outputId,
            //     //     projectId: project._id,
            //     // })
            //     // await logframe.save();
            //     //console.log(logframe);

            //     // if (index == logframes.length - 1) {
            //     // last work

            //     return {
            //         status: 'success'
            //     }

            //     // }
            // }
            for (let index = 0; index < projects.length; index++) {
                let data = projects[index];
                let md, ot
                let mandate = await Mandate.findOne({
                    tag: data.duuid
                });
                if (mandate) {
                    md = mandate.id
                    ot = mandate.outputId
                }

                let puid = Date.now() + Math.random();

                let project = {

                    variationCost: data.variationCost,
                    currency: data.currency,
                    batch: data.batch,
                    mandateId: md,
                    puid: data.puid,
                    mdaId: args.mdaId,
                    title: data.title,
                    budget: data.budget == null ? 0 : parseFloat(data.budget.toString().replace(/,/g, '')),
                    approvalDate: data.approvalDate,
                    fundingSource: data.fundingSource,
                    appropriated: data.appropriated == null ? 0 : parseFloat(data.appropriated.toString().replace(/,/g, '')),
                    planned_milestone: data.planned_milestone,
                    actual_milestone: data.actual_milestone,
                    cost: data.cost == null ? 0 : parseFloat(data.cost.toString().replace(/,/g, '')),
                    type: data.type,
                    start_date: data.start_date,
                    end_date: data.end_date,
                    status: data.status,
                    state: data.location,
                    // lga: data.lga,
                    // longitude: data.longitude,
                    // latitude: data.latitude,

                    // userId: data.userId,
                    fecId: data.fecId,
                    // budgetItem: data.budgetItem,
                };
                console.log('puid:',
                    data.puid);

                if (data.puid == undefined || data.puid == null || data.puid == '') {
                    project.puid = await puid

                    let proj = await new Project({
                        // variationCost: data.variationCost,
                        batch: data.batch,
                        mandateId: md,
                        outputId: ot,
                        puid: puid,
                        mdaId: args.mdaId,
                        title: data.title,
                        budget: data.budget == null ? 0 : parseFloat(data.budget.toString().replace(/,/g, '')),
                        approvalDate: data.approvalDate,
                        fundingSource: data.fundingSource,
                        appropriated: data.appropriated == null ? 0 : parseFloat(data.appropriated.toString().replace(/,/g, '')),
                        planned_milestone: data.planned_milestone,
                        actual_milestone: data.actual_milestone,
                        cost: data.cost == null ? 0 : parseFloat(data.cost.toString().replace(/,/g, '')),
                        type: data.type,
                        start_date: data.start_date,
                        end_date: data.end_date,
                        status: data.status,
                        state: data.location,
                        currency: data.currency,

                    });
                    console.log(proj);

                    await proj.save();

                    let logframe = new Logframe({
                        projectId: proj.id,
                        comments: data.intervention,
                        challenges: data.challenges,
                        rating: data.rating,

                        budget: data.budget == null ? 0 : parseFloat(data.budget.toString().replace(/,/g, '')),

                        approved: data.approved == null ? 0 : parseFloat(data.approved.toString().replace(/,/g, '')),
                        released: data.released == null ? 0 : parseFloat(data.released.toString().replace(/,/g, '')),
                        utilized: data.utilized == null ? 0 : parseFloat(data.utilized.toString().replace(/,/g, '')),

                        status: data.status,
                        qow: data.qow,
                        loc: data.loc == null ? 0 : (data.loc) * 100,
                        type: data.type,
                        mdaId: data.mdaId,
                        citizen: data.citizen,
                        longitude: data.longitude,
                        latitude: data.latitude,
                        // outputValue: data.outputValue,
                        // outputId: project.outputId,
                    })

                    await logframe.save();



                } else {
                    console.log('exsisting');

                    // project.puid = data.puid;
                    await Project.findOneAndUpdate({
                        puid: data.puid
                    }, project, {
                        new: true,
                    });

                    let proj = await Project.findOne({
                        puid: data.puid
                    });

                    console.log(proj._id);

                    let logframe = await new Logframe({
                        projectId: proj._id,
                        comments: data.intervention,
                        challenges: data.challenges,
                        // rating: data.rating,
                        // citizen: data.citizen,
                        longitude: data.longitude,
                        latitude: data.latitude,
                        budget: data.budget,
                        approved: data.approved,
                        released: data.released,
                        utilized: data.utilized,
                        status: data.status,
                        qow: data.qow,
                        loc: data.loc,
                        type: data.type,
                        // mdaId: data.mdaId,
                        images: data.images,


                        // outputValue: data.outputValue,
                        // outputId: project.outputId,
                    })
                    let images
                    if (proj.images == null) {
                        let li = JSON.parse(data.images)

                        images = li;

                    } else {
                        let pi = JSON.parse(proj.images)
                        let li = JSON.parse(data.images)

                        images = [...pi, ...li]
                    }

                    proj.images = JSON.stringify(images);
                    // console.log(proj);

                    await proj.save();
                    await logframe.save();

                }

                console.log('project uploaded');

                // puid: el[1],
                // title: el[2],
                // location: el[4],
                // start_date: el[5],
                // end_date: el[6],
                // budget: el[8],
                // appropriated: el[9],
                // released: el[10],
                // utilized: el[11],
                // status: el[12],
                // actual_milestone: el[13],
                // loc: el[14],
                // challenges: el[15],
                // intervention: el[16],






                // if (index == logframes.length - 1) {
                // last work




                // }
            }
            // report.status = true;
            // await report.save();
            return {
                status: 'success'
            }
        }
    },
    requestReport: {
        type: StatusType,
        args: {},
        async resolve(parent, args) {

            let mdas = await MDA.find({});
            console.log(mdas);
            let date = new Date


            let puid = await Math.floor(100000 + Math.random() * 900000);
            await mdas.forEach(element => {
                let report = new Reporting({
                    mdaId: element.id,
                    uid: puid,
                    title: 'Reported requested on ' + date.toLocaleDateString("en-NG")
                });
                report.save();
            });
            return {
                status: 'Success'
            };
        }

    }

}




module.exports = logframesMutations;