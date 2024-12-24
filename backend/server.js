import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';
const port = process.env.PORT;

connectDB();
const app = express();


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/todos', todoRoutes);


app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});