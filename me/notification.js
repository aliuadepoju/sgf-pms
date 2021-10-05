/**
 * Created by Somto on 29/06/2018.
 */
require('dotenv').config()

// var Jusibe = require('jusibe');

// let jusibe = new Jusibe(process.env.JUSIBE_PUBLIC_KEY, process.env.JUSIBE_ACCESS_TOKEN);


let mg = require('nodemailer-mailgun-transport');

const Email = require('email-templates').EmailTemplate;
let nodemailer = require('nodemailer');

let auth = {
    auth: {
        api_key: 'key-98f48ccb5a3432ed798129b3ac01a4f1',
        domain: 'mail.telcosdata.com.ng'
    },
    // proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
}
let transporter = nodemailer.createTransport(mg(auth));


// create template based sender function
// assumes text.{ext} and html.{ext} in template/directory
// let sendResetPasswordLink = transporter.templateSender(
//     new Email('./templates/reset'), {
//         from: 'info@inecvl.gov.ng',
//     });

exports.reset = function (email, link, name) {
    // transporter.template
    sendResetPasswordLink({
        to: email,
        subject: 'Password Reset - INEC VL'
    }, {
        name: name,
        link: link
    }, function (err, info) {
        if (err) {
            //console.log(err)
        } else {
            //console.log('Link sent\n' + JSON.stringify(info));
        }
    });
};
// exports.sms = (to, message) => {
//     let payload = {
//         to: to,
//         from: process.env.JUSIBE_FROM,
//         message: message
//     };
//     jusibe.sendSMS(payload)
//         .then(res => {
//             //console.log(res.body);
//         })
//         .catch(err => {
//             //console.log(err.body);
//         });
// }