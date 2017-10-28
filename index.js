/**
 * Created by hfs on 10/28/2017.
 */

var express = require('express');
var app = express();
var mongojs = require('mongojs');
mongoURI = 'mongodb://localhost/contactlist';

MONGOLAB_URI = "mongodb://hammadhfs:Alpha@123@ds237815.mlab.com:37815/contact-mgr";

var db = mongojs(mongoURI || MONGOLAB_URI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/contactlist', function (req, res) {
    console.log('I received a GET request');

    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist', function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});


app.get('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});


app.listen(3000);
console.log("Server running on port 3000")
// app.listen(process.env.PORT || 3000, function(){
//   console.log('listening on', http.address().port);
// });
