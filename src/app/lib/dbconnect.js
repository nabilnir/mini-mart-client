
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nbsql11.8upnco0.mongodb.net/?appName=NBSQL11`;

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        if (!process.env.DB_USER) {
            throw new Error('Invalid/Missing environment variable: "DB_USER"');
        }
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

async function getDb() {
    const client = await clientPromise;
    return client.db('miniMartDB');
}

export async function getItems(page = 1, limit = 8) {
    const skip = (page - 1) * limit;
    const db = await getDb();
    const items = await db.collection('items')
        .find({})
        .sort({ _id: -1 }) // Newest first
        .skip(skip)
        .limit(limit)
        .toArray();

    return items.map(item => ({
        ...item,
        _id: item._id.toString()
    }));
}

export async function getTotalItems() {
    const db = await getDb();
    return db.collection('items').countDocuments();
}

export async function getItem(id) {
    try {
        const db = await getDb();
        const item = await db.collection('items').findOne({ _id: new ObjectId(id) });
        if (item) {
            return { ...item, _id: item._id.toString() };
        }
        return null;
    } catch (e) {
        console.error("Error finding item:", e);
        return null;
    }
}

export async function createItem(data) {
    const db = await getDb();
    const result = await db.collection('items').insertOne(data);
    return result;
}

export default clientPromise;
