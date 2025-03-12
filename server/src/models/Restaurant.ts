import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurant extends Document {
  name: string;
  description: string;
  location: string;
  cuisineType: string;
  menu: Array<{ mealId: string; name: string; image: string; price: number }>; // Referencias a platos de TheMealDB
  rating: number;
  reviews: Array<{
    userId: mongoose.Types.ObjectId;
    comment: string;
    rating: number;
    createdAt: Date;
  }>;
  createdAt: Date;
}

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  cuisineType: { type: String, required: true },
  menu: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Referencia al plato
      price: { type: Number, required: true }, // Precio asignado por el restaurante
    },
  ],
  rating: { type: Number, default: 0 },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String, required: true },
      rating: { type: Number, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Restaurant = mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
export default Restaurant;