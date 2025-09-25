import {MongoClient} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")

let db;

export async function mongodbconnection(){
    await client.connect()
    db = client.db('task_four')
   const  coll = db.collection('names').insertOne({name:"jaseem"})
   console.log("complete");
   
   
}