const mongo = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/learnyoumongo"
let args = parseInt(process.argv[2])

//console.log(args)
mongo.connect(url, function(err, client) {
      client.db('learnyoumongo').collection('parrots').find({
        age: {$gt:args}
      }).toArray(function(err, documents) {
          let arr = JSON.stringify(documents);
          let arr2 = JSON.parse(arr);
          console.log(JSON.parse(JSON.stringify(documents)))
          //console.log(documents[0].age)
          
          client.close()
      })
})
