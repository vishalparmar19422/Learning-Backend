import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      "Database  connected and host is = ",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.log("Error connecting databse ", error);
  }
};

export default connectDB;