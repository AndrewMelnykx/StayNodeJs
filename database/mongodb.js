import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw Error("Please define a the MONGODB_URI");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch {
    console.error("Something went wrong with mongodb", error);
    process.exit(1);
  }
};

export default connectToDatabase;
