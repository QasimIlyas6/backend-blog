require("dotenv").config();
const express = require("express");
const { connectMongo } = require("./config/db");
const cors = require('cors');
const cookieParser = require("cookie-parser") 

const app = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser())

require('./routes/index.js')(app);

app.listen(5000, async () => {
    await connectMongo();
    console.log("Connected to server")

})