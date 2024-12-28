import express from 'express';
import path from 'path';
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



app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is ready');
    });
    
}



app.listen(port, () => {
    console.log(`Server is running in:${process.env.NODE_ENV} mode on port ${port}`);
});
