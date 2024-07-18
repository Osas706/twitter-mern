import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import notificationRoutes from './routes/notification.routes.js';

import connectMongoDB from './db/connectMongoDB.js';


dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = 8000;

app.use(express.json({limit: '5mb'})); // to parse req.body
app.use(express.urlencoded({extended: true, limit: '50mb'})); //to parse form data
app.use(cookieParser());
// app.use(express.bodyParser({limit: '50mb'}));

//routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/notifications", notificationRoutes)


//testing route
app.get("/", (req, res) => {
    res.send("Yo!")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});