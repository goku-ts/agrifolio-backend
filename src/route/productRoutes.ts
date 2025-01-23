import express from "express"

import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/profile/productControllers"

import { Auth } from "../middlewares/authMiddleware"

export const productRouter = express.Router()



{/* product ROUTES*/ }
productRouter.get("/:id", getProducts)
productRouter.post("/create/:id", addProduct)
productRouter.post("/update/:id", updateProduct)
productRouter.post("/delete/:id", deleteProduct)


