const User = require('./schema/user/user.model.js');
const Mda = require('./schema/mdas/mdas.model');
const Role = require('./schema/roles/roles.model');
const Output = require('./schema/outputs/outputs.model');
const Indicator = require('./schema/indicators/indicators.model');
const Leading = require('./schema/indicators/leading.model');
const Driver = require('./schema/indicators/driver.model');
const Mandate = require('./schema/mandates/mandates.model');
const Priority = require('./schema/priority/priority.model.js');
const Notn = require('./schema/notifications/notification.model.js');

let bcrypt = require('bcrypt');
const saltRounds = 10;
let users = require("./schema/user/users.json")
let mdas = require("./schema/user/mdas.json")
let prioritys = require("./schema/priority/prioritys.json")

let roles = [{
        name: 'StakeHolder',
        permissions: ['dashboard']

    },
    {
        name: 'Mda',
        permissions: ['pm', 'fm', 'rep']

    },
    {
        name: 'Project Manager',
        permissions: ['pm', 'fm']

    },
    {
        name: 'Reporter',
        permissions: ['rep']

    },
    {
        name: 'Admin',
        permissions: ['pm', 'fm', 'rep', 'settings', 'dashboard']
    },
]


//     for await (let el of roles) {


//         let role = {
//             "name": el.name,
//             "permissions": el.permissions,

//         };
//         Role.findOneAndUpdate({
//             name: el.name
//         }, role, {
//             new: true,
//             upsert: true
//         }).then(() => {
//             // if (index == roles.length - 1) //console.log('roles seeded')
//         })


//     }

// for (let index = 0; index < users.length; index++) {

//     bcrypt.hash(users[index].password, saltRounds, async function (err, hash) {
//         let mdaS = await Mda.findOne({
//             shortcode: users[index].shortcode
//         });



//         let roleS = await Role.findOne({
//             name: users[index].role
//         });


//         let user = {
//             "name": users[index].name,
//             "email": users[index].email,
//             "password": hash,
//             "access": users[index].access,
//             "mda": mdaS._id,
//             "role": roleS._id
//         };
//         User.findOneAndUpdate({
//             email: users[index].email
//         }, user, {
//             new: true,
//             upsert: true
//         }).then(() => {
//             if (index == users.length - 1) //console.log('users seeded')
//         })
//     });

// }

//     for (let index = 0; index < prioritys.length; index++) {


//         let priority = {
//             title: prioritys[index].title,
//         };
//         Priority.findOneAndUpdate({
//             title: prioritys[index].title
//         }, priority, {
//             new: true,
//             upsert: true
//         }).then(() => {
//             if (index == prioritys.length - 1) //console.log('Priorities seeded')
//         })


//     }
// }
let seedsss = async () => {
    //     for await (let el of mdas) {


    //         let mda = {
    //             "name": el.name,
    //             "shortcode": el.shortcode,

    //         };
    //         let mdaSave = await Mda.findOneAndUpdate({
    //             shortcode: el.shortcode
    //         }, mda, {
    //             new: true,
    //             upsert: true
    //         })

    //         let notn = new Notn({
    //             mdaId: mdaSave._id,
    //             title: 'Welcome ' + mdaSave.name,
    //             message: 'Welcome to the performance Management Dashboard'
    //         })

    //         await notn.save();
    //     }
    // let mandate = await Mandate.find();

    // for await (const it of mandate) {
    //     let indicators = await Indicator.find({
    //         mandateId: it._id
    //     })
    //     //console.log(indicators.length);

    //     let outputs = await Output.find({
    //         mandateId: it._id
    //     })
    //     if (outputs.length > 0) {
    //         it.outputId = outputs[0]._id;
    //         it.save();
    //         //console.log('saved');

    //     }
    // for await (const ind of indicators) {
    //     ind.priorityId = await it.priorityId;
    //     await ind.save();
    //     // //console.log("saved outcome to:" + ind.title + "," + it.priorityId, it.title);

    // }
    // for await (const out of outputs) {
    //     if (indicators.length > 0) {

    //         out.indicatorId = await indicators[0]._id;
    //         await out.save();
    //         //console.log("saved output to:" + out.title + "," + indicators[0]._id, indicators[0].title);
    //     }

    // }
    // }
    let leading = await Leading.find({});
    // for await (const l of leading) {
    //     l.tree = 1;
    //     // pri.save();

    //     let newDriver = new Driver({
    //         title: l.driver,
    //         priorityId: l.priorityId,
    //     });
    //     console.log(newDriver);

    //     newDriver.save();
    //     l.driverId = newDriver._id;
    //     l.save();
    //     console.log(l);

    //     //console.log('outcome:' + ind.target);

    // }
    // let indicators = await Indicator.find({});
    // for await (const ind of indicators) {
    //     ind.tree = 1;
    //     ind.save();
    //     //console.log('outcome:' + ind.target);
    // }

    // let outputs = await Output.find();
    // for await (const out of outputs) {
    //     out.tree = 1;
    //     out.save();
    //     //console.log('output:' + out.target);
    // }

}
const seed = async () => {

    for (let index = 0; index < users.length; index++) {

        bcrypt.hash(users[index].password, saltRounds, async function (err, hash) {
            let mdaS = await Mda.findOne({
                shortcode: users[index].shortcode
            });



            let roleS = await Role.findOne({
                name: users[index].role
            });


            let user = {
                "name": users[index].name,
                "email": users[index].email,
                "password": hash,
                "access": users[index].access,
                "mda": mdaS._id,
                "role": roleS._id
            };
            User.findOneAndUpdate({
                email: users[index].email
            }, user, {
                new: true,
                upsert: true
            }).then(() => {
                if (index == users.length - 1) console.log('users seeded')
            })
        });

    }

    // Output.find().then(res => {
    //     for (let index = 0; index < res.length; index++) {
    //         const element = res[index];
    //         Mandate.find({
    //             outputId: element._id
    //         }).limit(1).then(man => {

    //             element.mandateId = man[0]._id;
    //             element.save()
    //             console.log(element);

    //         })
    //     }

    // })

}
const seedssss = async () => {
    let prio = await Priority.find({
        tree: 2
    })

    for (let index = 0; index < prio.length; index++) {
        let element = prio[index];
        element.tag = 'P' + (index + 1);
        await element.save();
        console.log(element.tag);

        let driver = await Driver.find({
            priorityId: element._id
        });
        for (let dri = 0; dri < driver.length; dri++) {
            let drive = driver[dri];
            drive.tag = element.tag + 'D' + (dri + 1);
            await drive.save();
            console.log(drive.tag);

            let leading = await Leading.find({
                driverId: drive._id
            });
            for (let lead = 0; lead < leading.length; lead++) {
                let leads = leading[lead];
                leads.tag = drive.tag + 'L' + (lead + 1);
                await leads.save();
                console.log(leads.tag);


                let indicators = await Indicator.find({
                    leadingId: leads._id
                });
                for (let ind = 0; ind < indicators.length; ind++) {
                    let inds = indicators[ind];
                    inds.tag = leads.tag + 'OT' + (ind + 1);
                    await inds.save();
                    console.log(inds.tag);

                    let outputs = await Output.find({
                        indicatorId: inds._id
                    });
                    for (let out = 0; out < outputs.length; out++) {
                        let outs = outputs[out];
                        outs.tag = inds.tag + 'OP' + (out + 1);
                        let target = JSON.parse(outs.target);
                        let tar = []
                        target.forEach(element => {
                            let val = {}
                            val.year = element.year
                            val.q1 = (element.target / 4) * 1
                            val.q2 = (element.target / 4) * 2
                            val.q3 = (element.target / 4) * 3
                            val.q4 = (element.target / 4) * 4
                            val.annual = element.target
                            tar.push(val)
                        });
                        outs.targets = JSON.stringify(tar);

                        await outs.save();
                        console.log(outs.tag);


                        let mandates = await Mandate.find({
                            outputId: outs._id
                        });
                        for (let man = 0; man < mandates.length; man++) {
                            let mans = mandates[man];
                            mans.tag = outs.tag + 'M' + (man + 1);
                            await mans.save();
                            console.log(mans.tag);

                        }
                    }

                }
            }
        }
    }
}
let calculateTarget = (data) => {
    //console.log('calculating')
    if (data.type == 'quan') {
        let base = (parseInt(data.target) - parseInt(data.baseline)) / 4;
        //console.log(base);

        data.targetYear1 = parseInt(data.baseline) + (base * 1);
        data.targetYear2 = parseInt(data.baseline) + (base * 2);
        data.targetYear3 = parseInt(data.baseline) + (base * 3);
        data.targetYear4 = parseInt(data.baseline) + (base * 4);

        let target = [];
        target.push({
            year: 2020,
            target: data.targetYear1
        })
        target.push({
            year: 2021,
            target: data.targetYear2
        })
        target.push({
            year: 2022,
            target: data.targetYear3
        })
        target.push({
            year: 2023,
            target: data.targetYear4
        })


        let tar = JSON.stringify(target);
        // //console.log(tar);
        return tar
    }
}
module.exports = seed;