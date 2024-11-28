import express from "express"
import multer from 'multer';

import { Register,Login, } from "../controllers/user/userController"


const storage = multer.diskStorage({}); // Store image in memory as a Buffer
const upload = multer({ storage: storage });


export const userRouter = express.Router()

userRouter.post("/register", Register)
userRouter.post("/login", Login)
//userRouter.post("/upload/:id",upload.single('image'),uploadImage )