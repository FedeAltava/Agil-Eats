import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    role: "customer" | "restaurant" | "admin";
    address?: string;
    phone?: string;
    cratedAt: Date;
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email:{type: String, required: true, unique:true},
    password:{type: String,required: true},
    role:{type: String, enum: ["customer", "restaurant", "admin"], default: "customer" },
    address:{type:String, required: false},
    phone:{type: String, required: true},
    cratedAt: {type:Date, default:Date.now}
})

const User = mongoose.model<IUser>("User", userSchema);
export default User;