const express = require('express');
require('dotenv').config();
const app = express();
const notion = require('./notion')
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app running at port ${PORT}`)
})