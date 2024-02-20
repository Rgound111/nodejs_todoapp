import { User } from "../models/user.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req,res,next) => {
    // const token = req.headers.authorization.split(' ')[1];
    const {token} = req.cookies

    if (!token) return res.status(404).json({
        success: false,
        Message: "Login first"
    });

    const decoded = await jwt.verify(token, process.env.PRIVATE_KEY)

    req.user = await User.findById(decoded._id)

    next();
}