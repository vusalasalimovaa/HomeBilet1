import express from "express"
import "dotenv/config"
import "./src/config/dbConnection.js"
import productRouter from "./src/routers/productRouter.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5001

app.get("/", (req,res) => {
    res.send("Home Bilet1")
})

app.use("/api/products", productRouter)

app.listen(PORT, () => {
    console.log(`Server listen ${PORT}`)
})