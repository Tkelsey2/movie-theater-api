//express import
const express = require('express');
const {db} = require('./db/db');
const seed = require('./seed')
const userRouter = require('./routes/user');
const showRouter = require('./routes/show');

const app = express();


app.use(express.json())
app.use('/users', userRouter)
app.use('/shows', showRouter)

app.listen(3000, async ()=>{
    await seed()
    console.log('Listening on port 3000')
})