const express= require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose =  require('mongoose')
const bodyparser = require("body-parser");
const collection = require("./models/mongodb.js")
const collection1 = require("./models/mongodb.js")


const app=express()


//middlewares
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")



// route
app.use(require("./routes/index.js"))





// server configurations
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});