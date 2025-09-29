import mongoose from "mongoose";
 
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/productStore';

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoUri);
    console.log(
      `Database connected sucsessfully on ${connect.connection.host}`
    );
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};
