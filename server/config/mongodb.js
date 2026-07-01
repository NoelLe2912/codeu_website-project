import mongoose from "mongoose";
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Conntected"));
  await mongoose.connect(`${process.env.MONGODB_URL}/codeU-auth`);
};

export default connectDB;
