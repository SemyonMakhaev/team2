'use strict';

/* eslint no-unused-vars: 0 */
const Image = require('../models/image');
const upload = require('../../fileUploader.js');

exports.create = (req, res) => {
    /* eslint no-unused-vars: 0 */
    var file = req.files.image;
    if (!file) {
        res.send('file doesnt exists');
        return;
    }

    upload(file.data, (err, ans) => {
        if (err) {
            res.send('error: ' + JSON.stringify(err));
            return;
        }
        var image = {
            path: ans,
            answer: {
                latitude: 3.123123123,
                longitude: 2.121212
            },
            questId: parseInt(req.params.id, 10)
        };
        Image.create(image);
        res.send('created in db: ' + JSON.stringify(image));
    });
};

exports.createPage = (req, res) => {
    res.render('../views/images/create.hbs', {questId: req.params.id});
};

exports.update = (req, res) => {
    /* eslint no-unused-vars: 0 */
};

exports.delete = (req, res) => {
    /* eslint no-unused-vars: 0 */
};
