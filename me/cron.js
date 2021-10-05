const cron = require('node-cron');
import MDAs from './schema/mdas/mdas.model';
import Release from './schema/release/release.model';
import Budget from './schema/budget/budget.model';
import Project from './schema/projects/projects.model';
import Logframe from './schema/logframes/logframes.model';

let runCron = () => {
    generateMDAFinancials();

    cron.schedule('* * * * *', function () {
        // console.log('running a task every minute');
        // testCron();
    });
}


let generateMDAFinancials = async () => {
    let totalBudget
    let totalReleases
    let totalUtilization
    let totalActivityBudget
    let totalActivityReleases
    let totalActivityUtilization

    await Budget.deleteMany({
        amount: null
    })
    let result = await Budget.aggregate([{
            "$group": {
                "_id": {
                    "mdaId": "$mdaId",
                    "year": "2019"
                },
                "sum": {
                    "$sum": {
                        "$toDouble": "$amount"
                    }
                }
            }
        },
        {
            "$project": {
                "title": "$_id",
                "sum": 1,
                "_id": 0
            }
        }
    ]);
    console.log(result);

}



module.exports = runCron;