// Backend server code (server.js)

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks"); //post routes
const connectDB = require("./config/database"); //helps connect to database

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();


//Using Cors
//CORS(Cross-Origin Resource) Sharing is a security mechanism implemented by web browers
//to restrict cross-origin requests i.e. requests made from one domain (origin) to another
//To resolve this issue, you need to configure your back-end to allow requests from the front-end domain

app.use(cors())


//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/task',taskRoutes)

app.listen(3006, () => {
  console.log('Server listening on port 3006');
});
