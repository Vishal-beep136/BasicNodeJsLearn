// ------------ TESTING API --------------------

// import http from 'http';
// import data from './data.js';

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(2000);



// ----------------- CREATE FILE FROM FS -----------------

// import fs from 'fs';

// const input = process.argv;

// if (input[2] === 'add') {
//     fs.writeFileSync(input[3], input[4]);
//     console.log("File Created successfully!");
// } else if (input[2] === 'remove') {
//     fs.unlinkSync(input[3]);
//     console.log("File Removed successfully!");
// } else {
//     console.log("Failed to write : invaild input");
// }



// ----------------- CREATE FILE FROM FS AND PATH -----------------

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const dirPath = path.join(__dirname, 'files');



// --------------- EXPRESS NORMAL PRACTICE 1 -------------

// import express from "express";
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__dirname);
// // const htmlFile = path.join(__dirname, '/index.html');
// const app = express();


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'notfound.html'));
// });

// app.listen(3000);



// ---------------------- MIDDLE WARE NODE ----------------------

// import express from "express";

// const app = express();


// //this is middleware - that can change the req, res
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide age : learning middleware");
//     } else if (req.query.age < 18) {
//         resp.send("You can't learn Middleware at this age! do you think I am kidding 😁😁");
//     } else {
//         next();
//     }
// };


// app.use(reqFilter);

// app.get('/', (req, res) => {
//     res.send('Welcome to homepage and learnig Middleware!');
// })


// app.get('/users', (req, res) => {
//     res.send('Welcome to User page and learnig Middleware!');
// })

// app.listen(2126);


// _______________😀 ROUTE LEVEL MIDDLEWARE 😀_______________


// import express from "express";
// import reqFilter from "../nodesLearn/middleware.js";

// const app = express();
// const route = express.Router();

// route.use(reqFilter);

// app.get('/', (req, res) => {
//     res.send('Welcome to homepage and learnig Middleware!');
// });


// app.get('/users', (req, res) => {
//     res.send('Welcome to User page and learnig Middleware!');
// });

// route.get('/about', (req, res) => {
//     res.send('Welcome to About page and learnig Middleware!');
// });

// route.get('/contact', (req, res) => {
//     res.send('Welcome to Contact page and learnig Middleware!');
// });

// app.use('/', route);

// app.listen(2126);


// -------------------- 🌿 Mongo Db 🍃 --------------------

// import dbConnect from './mongodb.js';

// dbConnect().then((resp) => {
//     return resp.find().toArray();
// }).then((data) => {
//     console.log(data);
// });

// console.warn(dbConnect());


// ----------------- 🦝 Node Js with Mongoose and mongo db 🐻

// import mongoose from "mongoose";

// const main = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String
//     });

//     const ProductModel = mongoose.model('products', ProductSchema);
//     let data = new ProductModel({ name: 'm8' });
//     let result = await data.save();
//     console.log(result);
// }


// main();


// ---------------- CREATEING DATA MONGOOSE EXPRESS 😑 ----------------

// import express from "express";
// import connectDb from "./config.js";
// import product from "./product.js";

// connectDb();
// const app = express();
// app.use(express.json());
// app.post("/create", async (req, res) => {
//     let data = new product(req.body);
//     let result = await data.save();
//     console.log(req.body);
//     res.send(result);
// });

// app.listen(1818);


// <-------------------- Search Api in Node Js with MongoDb 🍁🍀 ----------------------->


import express from "express";
import connectDb from "./config.js";
import product from "./product.js";

connectDb();
const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } }
            ]
        }
    );
    res.send(data);
});

app.listen(1818);


// ---------- `Multer` Upload File Nodejs 👆 ⬆ -------------

// import express from "express";
// import multer from "multer";

// const app = express();

// const upload = multer({

//     storage: multer.diskStorage({

//         destination: function (req, file, cb) {
//             cb(null, "uploads");
//         },

//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//         }

//     })

// }).single("user_file");



// app.post("/upload", upload, (req, res) => {
//     res.send("File uploaded!");
// });


// app.listen(1818);


// -----------------------😎🙄 OS Module Node Js -------------------------

// import os from "os";

// console.log("Processor architecture - ", os.arch());

// console.log("Free Memory - ", os.freemem() / (1024 * 1024 * 1024));
// console.log("Total Memory - ", os.totalmem() / (1024 * 1024 * 1024));

// console.log("Host Name - ", os.hostname());

// console.log("Platform - ", os.platform());

// console.log("User Info - ", os.userInfo());





