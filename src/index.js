const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    "mongodb://goweek:snow1010@ds157383.mlab.com:57383/goweek-keila", 
{
    useNewUrlParser: true
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});