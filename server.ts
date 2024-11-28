import express from "express"
require('dotenv').config({ path: "../.env" });

import { dbConnect } from "./src/db/connectionDb"
import cors from "cors"
import { userRouter } from "./src/route/userRoutes"
import { profileRouter } from "./src/route/profileRoutes"



const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", userRouter)
app.use("/profile", profileRouter)


const PORT = process.env.PORT || 3001


app.listen(PORT, () => dbConnect())