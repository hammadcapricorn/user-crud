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


app.listen(3000);
console.log("Server running on port 3000");