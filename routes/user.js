import express  from "express";
import { register, loginUser, getMyprofile, logoutUser, } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router()

router.post("/new", register)
router.post("/login",loginUser)

router.get("/logout",logoutUser)

router.get("/me" ,isAuthenticated , getMyprofile)

export default router