import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const product = mongoose.model('products', productSchema);

export default product;