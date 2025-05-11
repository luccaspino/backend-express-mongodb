import express from "express";
import dotenv from "dotenv";
import db from "./database/configdb.js";
import userRoute from "./routes/user.route.js";
import exampleRoute from "./routes/example.route.js";
import taskRoutes from "./routes/task.route.js"; 
import User from './models/User.js'; 

dotenv.config();
db.connect();

const app = express();
app.use(express.json());
app.use("/users", userRoute);
app.use("/secureExampleRoute", exampleRoute);
app.use('/tasks', taskRoutes);

app.get("/", (req, res) => {
    res.send({message: 'Hello World!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
