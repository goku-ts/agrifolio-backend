import express from "express"
require('dotenv').config({ path: "../.env" });

import { dbConnect } from "./db/connectionDb"
import cors from "cors"
import { userRouter } from "./route/userRoutes"
import { profileRouter } from "./route/profileRoutes"
import { productRouter } from "./route/productRoutes";



const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", userRouter)
app.use("/profile", profileRouter)
app.use("/product", productRouter)


const PORT = process.env.PORT || 3001


app.listen(PORT, () => dbConnect())