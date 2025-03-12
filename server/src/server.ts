import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import authRoutes from "./routes/authRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";
import orderRoutes from "./routes/orderRoutes";
// Carga las variables de entorno
dotenv.config();

// Conecta a MongoDB
connectDB();

// Crea una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Puerto del servidor
const PORT = process.env.PORT || 5000;
// Rutas
// Registrar las rutas
app.use("/api/auth", authRoutes); // Rutas de autenticación
app.use("/api/restaurants", restaurantRoutes); // Rutas de restaurantes
app.use("/api/orders", orderRoutes); // Rutas de pedido

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Agil-Eats funcionando");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});