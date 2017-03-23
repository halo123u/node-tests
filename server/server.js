const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App"
    });
});

app.get('/users',(req,res) =>{
    res.send([{
        name: 'oswaldo',
        age: 22
    }, {
        name: "joe",
        age:22
    }]);
})
app.listen(3000);

module.exports.app = app;