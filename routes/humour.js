var express = require('express');
var router = express.Router();
var Video = require('../models/video');

/* GET humour page. */
router.get('/', function(req, res, next) {
  res.render('video', { 
                        type: 'video',
                        title: 'Bendito Machine V',
                        category: 'Humour',
                        slabTitle: ['Carl Sagan', 'is great!'],
                        description: 'This is a video description',
                        sources: [{src: '162708494', type: 'vimeo'}]
             });
});

/* GET a video. */
router.get('/video', function(req, res, next) {
    Video.getNext(function (err, video) {

        res.json({
            type: video.type,
            title: video.title,
            category: video.category,
            slabTitle: video.slabTitle,
            description: video.description,
            sources: video.source
        });
    });
});

module.exports = router;
