//express import
const express = require('express');
const db = require('./db/db');
const {userRouter} = require('./routes/user');
const {showRouter} = require('./routes/show');

const app = express();

function middle(req, res, next) {
    try {
        
    } catch (error) {
        res.status(404).send(error);
    }
}

app.use(express.json)
app.use('/users', middle, userRouter)
app.use('/shows', middle, showRouter)

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})