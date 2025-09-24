import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

let db;
let coll;
const client = new MongoClient('mongodb://127.0.0.1:27017')


export async function main() {
  await client.connect()
db = client.db("mydataperson")
coll = db.collection("person")
}

export function getDB(){
    return db;
}
export function getcoll(){
db = client.db("mydataperson")
coll = db.collection("person")
    return coll;
}

