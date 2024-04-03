import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "../../constant.js";
dotenv.config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n Hurray! MONGO DB connected !! DBHOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED:", error);
    process.exit(1);
  }
};
export default connectDB