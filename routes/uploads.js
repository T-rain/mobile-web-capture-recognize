var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');


router.post('/', function(req, res, next) {
  
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        /*
        var old_path = files.file.path,
            file_size = files.file.size,
            file_ext = files.file.name.split('.').pop(),
            index = old_path.lastIndexOf('/') + 1,
            file_name = old_path.substr(index),
            new_path = path.join(process.env.PWD, '/tmp/', file_name + '.' + file_ext);
            console.log(process.env.PWD);
            console.log(new_path);
        
        fs.readFile(old_path, function(err, data) {
            fs.writeFile(new_path, data, function(err) {
                fs.unlink(old_path, function(err) {
                    if (err) {
                        res.status(500);
                        res.json({'success': false});
                    } else {
                        res.status(200);
                        res.json({'success': true});
                    }
                });
            });
        });
        */
        console.log(fields);
        console.log(files);
        res.json(fields);
        
    });

});

module.exports = router;