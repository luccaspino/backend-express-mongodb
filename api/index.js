import express from "express";
import dotenv from "dotenv";
import db from "./database/configdb.js";
import User from "./models/User.js";


dotenv.config();
db.connect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());git


app.get("/", (req, res) => {
    res.send({message: 'Hello World!'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});