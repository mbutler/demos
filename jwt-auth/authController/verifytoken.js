const jwt = require('jsonwebtoken');
const model = require('../schema/schemaDefination');
require('dotenv').config();



exports.veriftoken = async(req, res, next) => {

    //   check the header from request

    let token = req.headers['authorization'];

    if (!token) {
        res.json({
            'error': true,
            'msg': 'invalid token'
        })
    }


    try {

        let payload = await jwt.verify(token, process.env.secret);
        console.log(payload);



        let data = await model.findById(payload._id);

        if (data) {
            next();
        } else {
            res.status(400).json({ 'error': true, 'msg': 'no user found' })
        }



    } catch (error) {

        console.log(error);
        res.status(500).json({ 'error': true, 'msg': 'server error' })

    }



}