import mongoose from "mongoose";

function connectDb() {
    mongoose.connect('mongodb://localhost:27017/e-comm');
}

export default connectDb;
