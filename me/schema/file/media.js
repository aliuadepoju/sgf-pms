module.exports = (app) => {
  const mediaCtrl = require('./media.controller');
  var ext = /(?:\.([^.]+))?$/;
  let multer = require('multer');
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/files')
    },
    filename: (req, file, cb) => {
      //console.log(file);

      cb(null, file.originalname.replace(/\s+/g, '-').toLowerCase())
    }
  });
  let upload = multer({
    storage: storage,
    limits: {
      fieldSize: 25 * 1024 * 1024
    }
  });

  var cpUpload = upload.fields([{
    name: 'media',
    maxCount: 4
  }]);

  app.post('/media/upload', cpUpload, mediaCtrl.upload);


}