import mongoose from "mongoose";

// Cache de conexão para ambientes serverless (Vercel)
// Sem isso, cada invocação abre uma nova conexão e esgota o pool do Atlas
let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

const connect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set("strictQuery", true);
    cached.promise = mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected");
  } catch (error) {
    cached.promise = null;
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

  return cached.conn;
};

export default { connect };