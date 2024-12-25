import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT;

connectDB();
const app = express();

// Middleware Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware Cookie parser
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);


app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});