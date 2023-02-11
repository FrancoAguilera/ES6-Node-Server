import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const DB_CONNECTION: string = process.env.DB_CONNECTION || "";

export const connectDB = async function () {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.info(">>> DB Connection OK");
  } catch (error) {
    console.error(error);
    throw new Error(">>> DB Connection Failed");
  }
};
