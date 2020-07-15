const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require('./routers/user.js')
const cors = require("cors")
const app = express()

dotenv.config()

app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, function(err, db){
    if(err){
        console.log("not connected")
    } else{
        console.log("database connected")
    }
});



app.use(express.json())
app.use(userRouter)



app.listen(8080, () => {
    console.log(`Server running on port 8080`)
})