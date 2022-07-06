const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {

    mongoose.connect(process.env.url, (err) => {
        err ? console.log("error: " + err) : console.log('connected sucessfully...!')
    })
}