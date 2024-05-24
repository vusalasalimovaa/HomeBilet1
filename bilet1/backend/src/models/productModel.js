import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  rate: {
    type: Number,
    required: true,
    trim: true,
  },
  like: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image:{
    type:String,
    required:true,
    trim:true
},
},
{collection:"Product"}
);

const Product = mongoose.model("Product", productSchema)
export default Product
