import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);

  } catch (error) {
    console.error(`error: ${error.message}`);
    console.log("error in connectMongoDB", error);

    process.exit(1);
  }
};


export default connectMongoDB