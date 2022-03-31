let MongoClient = require('mongodb').MongoClient;

async function readDB(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
   const uri = "mongodb+srv://ErickSonic:ERick280103@instruments.itgoo.mongodb.net/instruments?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
       record = await instrumentList(client);
       return record;

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function instrumentList(client){
  let query = { }
  list = await client.db("instruments").collection("instruments").find(query).toArray();
  return list;
};

module.exports = readDB();
// readDB().catch(console.error).then(val => {
//   console.log(val)
// });