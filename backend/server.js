import express from 'express';
import todos from './data/todos.js';


const port = 5000;
const app = express();


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/todos', (req, res) => {
    res.send(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find((t) => t._id === req.params.id);
    res.send(todo);
});


app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});