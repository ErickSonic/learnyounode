const mongo = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/learnyoumongo"
let args = parseInt(process.argv[2])

//console.log(args)
mongo.connect(url, function(err, client) {
      client.db('learnyoumongo').collection('parrots').find({
        age: {$gt:args},},{
        name: 1
      , age: 1
      , _id: 0
      }).toArray(function(err, documents) {
          console.log(JSON.parse(JSON.stringify(documents)))
          //console.log(documents)
          
          client.close()
      })
})
