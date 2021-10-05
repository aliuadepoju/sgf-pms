// const util = require('../util.js');
const Media = require('../../models/files.js');

const imgurl = process.env.SERVER_URL;
// const imgurl = ''

const mongoose = require('mongoose');



exports.upload = (req, res) => {
  // Validate request, remeber to check for duplicate emails
  //   req.checkBody("title", "Enter title.").exists();
  //   req.checkBody("size", "Enter your Status").exists();
  //   req.checkBody("type", "Enter the level of completion").exists();


  //   let errors = req.validationErrors();
  //   if (errors) {
  //     res.status(500).send(errors);
  //     return;
  //   } else {

  // Create a Sh
  let hashed;

  let link;

  if (typeof req.files['media'] != 'undefined') {

    if (req.files['media'].length > 0) {


      // const element = array[index]
      //console.log(req.files['media']);

      link = imgurl + 'files/' + req.files['media'][0].filename;
    }



    const medium = new Media({
      title: req.body.title,
      size: req.body.size,
      type: req.body.type,
      fileUrl: link,
    });

    // Save Sh in the database
    medium.save()
      .then(data => {
        res.status(200).send(data);
      }).catch(err => {
        res.status(500).send({
          status: 1,
          message: err.message || "Some error occurred while uploading this file."
        });
      });
  } else {
    res.status(500).send({
      status: 1,
      message: err.message || "Some error occurred while uploading this file."
    });
  }

};