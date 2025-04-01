import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = process.env.DB_NAME || "myapp";

let cachedDb: Db | null = null;

export async function connectDB() {
  if (cachedDb) return cachedDb;
  await client.connect();
  cachedDb = client.db(dbName);
  return cachedDb;
}
