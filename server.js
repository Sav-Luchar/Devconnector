const express = require ('express');
const mongoose = require ('mongoose');
const users = require ('./routes/api/users');
const profile = require ('./routes/api/profile');
const posts = require ('./routes/api/posts');
const bodyParser = require('body-parser');
const app = express ();

// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//DB config
const db = require ('./config/keys').mongoURI
//CONNECT to mongoDB
mongoose
    .connect(db)
    .then(() => console.log ('MongoDB connected'))
    .catch(err => console.log (err));
//First Route
app.get('/', (req,res) => res.send('hello Empress Lulu'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5000;
app.listen(port,()=> console.log(`Server running on port ${port}`));