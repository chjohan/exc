var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/exc');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS videos (id VARCHAR(15) PRIMARY KEY, title VARCHAR(250) NOT NULL, description TEXT NOT NULL, slabTitle VARCHAR(250) NOT NULL, type VARCHAR(7) NOT NULL, dateAdded REAL NOT NULL)");

    /*
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
    */


    var stmt = db.prepare("INSERT INTO videos VALUES (?, ?, ?, ?, ?, ?)");
    stmt.run('162853145', 'We are the faction collective', 'This is a aaa description 2.', 'we are;the factory;collective', 'vimeo', new Date().getTime());
    stmt.finalize();

    //db.run("INSERT INTO demo (runtime) VALUES (?)", new Date().getTime());

    db.each("SELECT * FROM videos", function(err, row) {
        console.log("This app was run at " + row);
    });
});

db.close();
