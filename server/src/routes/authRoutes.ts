import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User"

const router = express.Router()
// User Register
router.post("/register",async(req, res)=>{
    try{
        const {name ,email, password, role} = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message:"El Correo electronico ya esta registrado" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role || "customer"
        });
        await user.save();
        res.status(201).json({ message: "Usuario registrado correctamente"});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error al registrar el usuario"});
    }
});

// Log in
router.post("/login", async (req, res)=>{
    try{
        const {email, name} = req.body;
        const user = await User.find({ email });
        if(!user){
            return res.status(400).json({ message: "Credenciales invalidas" });
        }
        // token generator
        const token = jwt.sing( {id: user._id, role: user.role }, process.env.JWT_SECRET || "",{ expiresIn: "1h" })
        res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
})

export default router;