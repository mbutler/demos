const express = require('express');
require('dotenv').config();
const app = express();


const { veriftoken } = require('./authController/verifytoken');


//CONNECT MONGO DB FOR EXCHANGING  USER DATA 

const { connect } = require('./mongoConnect/connect');
connect();

app.use(express.json());


app.get('/', veriftoken, (req, res, next) => {


    //THIS IS THE ROOT PAGE AND IT IS PROTECTED BY MIDDELWARE

    // FOR LOGIN : /user/login
    // FOR SIGNUP: /user/signUp

    res.json({
        'msg': 'in root page'
    })


})

app.use('/user', require('./routesController/routes'));



app.listen(process.env.PORT || 3200, (err) => {
    if (err)
        console.log(err);

    else
        console.log('connected ' + process.env.PORT);
})