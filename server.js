//express import
const express = require('express');
const db = require('./db/db');

const app = express();


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})