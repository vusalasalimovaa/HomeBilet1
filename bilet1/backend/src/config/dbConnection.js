import mongoose from "mongoose";

mongoose.connect(process.env.MongoURL).then(() => {
    console.log("Server connect Mongoose..")
}).catch(() => {
    console.log("Server not connected Mongoose...")
})