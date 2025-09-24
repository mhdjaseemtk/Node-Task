import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

let db;
const client = new MongoClient(process.env.MONGO_URI)


export async function main() {
  await client.connect()
db = client.db(process.env.DB_NAME)
}

export function getDB(){
    return db;
}
