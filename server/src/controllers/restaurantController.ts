import { Request, Response } from "express";
import Restaurant from "../models/Restaurant";

export const createRestaurant = async (req:Request, res: Response)=>{
    try{
        const {name, description, location, cuisineType, menu} = req.body;
        if(req.user.role )
    }
}