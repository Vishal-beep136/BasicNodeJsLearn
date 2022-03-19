// ------------------👽 Basic Api With Mongo Db 🍏 --------------
import express from "express";
import dbConnect from "./mongodb.js";

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});


app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
})

app.listen(1818);
