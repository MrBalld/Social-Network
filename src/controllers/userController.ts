import { Request, Response } from "express";
import { User, Thought } from "../modles/index.js";

export const getUsers = async(_req: Request, res: Response) => {
    try {
        const userData = await User.find().select("-__v");
        return res.json(userData);
    }
    catch (err){
        console.log(err);
        return res.status(500).json(err);
    }
}

