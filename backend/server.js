import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

import connectMongoDB from './db/connectMongoDB.js';


dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({extended: true})); //to parse form data
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


//testing route
app.get("/", (req, res) => {
    res.send("Yo!")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});