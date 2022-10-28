const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const category = require('./data/categories.json');

const details = require('./data/content.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const newsSellect = details.find(news => news._id === id);
    res.send(newsSellect);
})

app.get('/newsCategory/:id', (req, res) => {
    const id = req.params.id;
    const newsSellect = details.find(news => news._id === id);
    res.send(newsSellect);
})

app.get('/login/:id', (req, res) => {
    const id = req.params.id;
    const newsSellect = details.find(news => news._id === id);
    res.send(newsSellect);
})

app.get('/details', (req, res) => {
    res.send(details);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const categoryNews = details.filter(detail => detail.category_id === id)
    res.send(categoryNews);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})