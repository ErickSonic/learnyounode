const fs = require ('fs')
let MongoClient = require('mongodb').MongoClient;

let todaydate = new Date();
let day = ("0" + todaydate.getDate()).slice(-2);
let month = ("0" + (todaydate.getMonth() + 1)).slice(-2);
todaydate = day + "/" + month;

async function readDB(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
   const uri = "mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/contacts?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
       record = await contactList(client);
       return record;

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function contactList(client){
  let query = { date: todaydate}
  list = await client.db("contacts").collection("contacts").find(query).toArray();
  return list;
};

module.exports = readDB();