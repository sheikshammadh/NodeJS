import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/empRouter.js';

// Load environment variables
dotenv.config({ path: './config/prod.config' });

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const db_url = process.env.MONGO_DB_LOCAL_URL;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Routes
app.use("/emp", router);

app.get("/", (req, res) => {
    res.json({ msg: "Application Root Request" });
});

// MongoDB connection
mongoose.connect(db_url)
    .then(() => {
        console.log("MongoDB Connection Success!");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    });

// Start server
app.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`Server Running.. http://${host}:${port}/`);
});
