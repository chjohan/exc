var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/exc');

exports.add = function(id, type, title, description, tags, cb) {
    console.log('Add function for video called.');
}

exports.getNextByUser = function(user, cb) {
    console.log('Get next video by user called.');
}

exports.getNext = function(cb) {
    console.log('Get next video called.');
    var video = {};

    db.serialize(function() {
        db.each('SELECT * FROM videos ORDER BY dateAdded DESC LIMIT 1', function(err, row) {
            if (err != null) return cb(err, null);

            var slabTitle = row.slabTitle.split(';');
            video = {
                        type: 'video',
                        title: row.title,
                        category: 'Humour',
                        slabTitle: slabTitle,
                        description: row.description,
                        source: [{
                            src: row.id,
                            type: row.type
                        }]
            };
            //console.log(row);
            //console.log(video);
            cb(null, video);

        });
        
    });

}
