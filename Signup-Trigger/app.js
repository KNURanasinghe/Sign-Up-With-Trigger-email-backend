require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router')

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server Up and Runing PORT:",process.env.APP_PORT);
});