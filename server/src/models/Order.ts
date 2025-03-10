import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId; // Usuario que realizó el pedido
  restaurantId: mongoose.Types.ObjectId; // Restaurante al que se hizo el pedido
  items: Array<{ mealId: string; name: string; image: string; quantity: number; price: number }>; // Platos del pedido
  totalPrice: number;
  status: "pending" | "confirmed" | "delivered" | "cancelled";
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  items: [
    {
      mealId: { type: String, required: true }, // ID del plato en TheMealDB
      name: { type: String, required: true }, // Nombre del plato
      image: { type: String, required: true }, // URL de la imagen del plato
      quantity: { type: Number, required: true }, // Cantidad del plato
      price: { type: Number, required: true }, // Precio asignado por el restaurante
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "confirmed", "delivered", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;