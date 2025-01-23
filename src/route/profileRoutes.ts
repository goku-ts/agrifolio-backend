import express from "express"

import { addProfile, deleteProfile, getAllProfiles, getProfile, updateProfiles } from "../controllers/profile/profileControllers"

import { Auth } from "../middlewares/authMiddleware"

export const profileRouter = express.Router()



{/* service ROUTES*/ }
profileRouter.get("/", getAllProfiles)
profileRouter.get("/:pid", getProfile)
profileRouter.post("/create", Auth, addProfile)
profileRouter.put("/:id", Auth, updateProfiles)
profileRouter.delete("/:id", Auth, deleteProfile)


