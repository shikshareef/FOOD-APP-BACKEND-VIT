// server.js or index.js (whichever is your main file)
const dotenv = require('dotenv');
const connectDB = require('./db/index.js');
const express = require('express');
const cors = require('cors');
const app = require('./app.js');

dotenv.config({
    path: './.env' // Ensure the path is correct, typically './.env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB ERROR: !!!", err);
    });


//usinhg the student router

const studentRoutes = require('./routes/StudentRoute.js')
app.use(studentRoutes);




