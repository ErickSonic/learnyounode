const fs = require ('fs')
let MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/contacts?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("contacts");
  dbo.collection("contacts").find().toArray(function(err, result) {
    if (err) throw err;

    //console.log(result);
    let contactData = JSON.stringify(result);
    //console.log(contactData);
    module.exports = contactData;
    db.close();
  });
});
