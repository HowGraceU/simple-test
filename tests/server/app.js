const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    res.send({
        name: 'jqx'
    })
})

const server = app.listen(3000, () => {
    console.log('server start at 3000');
});

module.exports = app;