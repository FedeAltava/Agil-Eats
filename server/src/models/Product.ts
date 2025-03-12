import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image: string; 
  category: string; 
  restaurantId: mongoose.Types.ObjectId; 
  createdAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;