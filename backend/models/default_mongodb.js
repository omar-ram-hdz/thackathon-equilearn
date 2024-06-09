import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dataBaseName = 'equilearn';

export async function getMongoConnection(collection) {
  await client.connect();
  const db = client.db(dataBaseName);
  return db.collection(collection);
}
