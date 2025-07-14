const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB } = require('./config/database');
require('dotenv').config();

app.use(express.json());

connectDB().
    then(() => {
        console.log('database connection established.');
        app.listen(process.env.PORT, () => {
            console.log(`Listening on ${process.env.PORT} .......................`);
        });
    }).
    catch((err) => {
        console.log("Something went wrong : " + err)
    })