// lib/mongodb.js

import { MongoClient } from "mongodb";

declare global {
  // Yeh line type define kar rahi hai global property ke liye
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Add type declaration for global

  if (!global._mongoClientPromise) {
    client = new MongoClient(uri!); // Add non-null assertion since we check above
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri!);
  clientPromise = client.connect();
}

export default clientPromise;
