const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();

//DB config
const db = require ('./config/keys').mongoURI
//CONNECT to mongoDB
mongoose
    .connect(db)
    .then(() => console.log ('MongoDB connected'))
    .catch(err => console.log (err));
//First Route
app.get('/', (req,res) => res.send('hello Empress Lulu'));

const port = 5000;
app.listen(port,()=> console.log(`Server running on port ${port}`));