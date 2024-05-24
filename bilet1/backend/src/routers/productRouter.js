import express from "express"
import { addProduct, deleteProductById, getAllProduct, getProductById, patchProductById, putProductById } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.get("/", getAllProduct)
productRouter.post("/", addProduct)
productRouter.get("/:id", getProductById)
productRouter.delete("/:id", deleteProductById)
productRouter.patch("/:id", patchProductById)
productRouter.put("/:id", putProductById)

export default productRouter