const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/products/:id', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get('/users', (req, res) => {
  res.status(200);
  res.json({ firstName: 'John', lastName: 'Smith', age: 55 });
});

app.post('/users', (req, res) => {
    const data = req.body;

    console.log(data);
    res.json({ ok: true });
});

app.get('/ping', (req, res) => {
    res.status(200);
    res.json({ status: 'ok' });
});

app.get('/users/1', (req, res) => {
    res.status(200);
    res.json({ firstName: 'Eve' });
});

app.listen(8000, () => {
  console.log('CORS-enabled web server listening on port 8000');
});