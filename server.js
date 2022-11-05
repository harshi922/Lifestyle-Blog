var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var conn = mongodb.MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.post('/submit', function (req, res) {
    var data = req.body;
    var record =
    {
        "Title": data.title, "Content": data.content, "Date": data.date, "Image": data.image,
        "Category": data.category
    }
    conn.then(function (db) {
        console.log("db connec success");
        var dbo = db.db("blog");
        dbo.collection('posts').insertOne(record);
    });
    res.send('Data received:\n' + JSON.stringify(record));
});

app.get('/all', function (req, res) {
    conn.then(function (db) {
        var dbo = db.db("blog");
        console.log("succ");
        dbo.collection("posts").find({},
            {"Title": 1, "Content": 0, "Date":0, "Image": 0,
            "Category": 0 }).toArray(function (err,
                result) {
                if (err) throw err;
                console.log(result);
                res.render('all', { result: result });
            });
    });
});
app.post('/delete', function (req, res) {
    conn.then(function (db) {
        var dbo = db.db("blog");
        var data = req.body.deltitle;
        var myquery = { Title: data };
        dbo.collection("posts").deleteMany(myquery, function (err,
            obj) {
            if (err) throw err;
            console.log(obj.deletedCount+" document(s) deleted");
            res.send(obj.deletedCount + " document(s) deleted");
        });
    });
});
app.post('/update', function (req, res) {
    conn.then(function (db) {
        var dbo = db.db("blog");
        var myquery = { Title: req.body.oldtitle };
        var newvalues = { $set: { Title: req.body.newtitle } };
        dbo.collection("posts").updateOne(myquery, newvalues,
            function (err, obj) {
                if (err) throw err;
                else {
                    console.log("1 document updated");
                    res.send("1 document updated");
                }
            });
    });
});
app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});