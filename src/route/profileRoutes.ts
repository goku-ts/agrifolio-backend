import express from "express"

import { addPost, getAllPosts, deletePost, updatePost, getPost, getUserPosts } from "../controllers/profile/profileControllers"

import { Auth } from "../middlewares/authMiddleware"

export const profileRouter = express.Router()



{/* service ROUTES*/ }
profileRouter.get("/", getAllPosts)
profileRouter.get("/:pid", getPost)
profileRouter.post("/create", Auth, addPost)
profileRouter.put("/:id", Auth, updatePost)
profileRouter.delete("/:id", Auth, deletePost)


