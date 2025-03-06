import mongoose from "mongoose";
import dotenv from "dotenv";

// Carga las variables de entorno
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error al Conectar MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;