const express = require('express');
const widdershins = require('widdershins');

const options = {
    codeSamples: false, 
    yaml: true
};

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/doc', (req, res) => {
    widdershins.convert(req.body, options)
    .then(markdownOutput => {
        res.contentType('application/json');
        res.send({ markdownOutput });
    })
    .catch(err => {
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));