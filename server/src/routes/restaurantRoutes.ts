import express from "express";
import { createRestaurant, getRestaurants, getRestaurantById } from "../controllers/restaurantController";
import authenticate from "../middleware/authenticate";

const router = express.Router();

// Crear un restaurante (protegido por autenticación)
router.post("/", authenticate, createRestaurant);

// Obtener lista de restaurantes
router.get("/", getRestaurants);

// Obtener detalles de un restaurante específico
router.get("/:id", getRestaurantById);

export default router;