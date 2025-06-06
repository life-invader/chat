import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB_URI);
    console.debug("[Mongoose connect]: connected!")
  } catch (error) {
    console.error("[Mongoose connect]: connection failed!", error)
  }
}