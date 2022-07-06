const jwt = require('jsonwebtoken');
const model = require('../schema/schemaDefination');

exports.signUp = async(req, res, next) => {

    // this is the name of input type parameter of frontend
    // <input name ='username'>...</input>

    let { username, password, email } = req.body;

    if (username == null || password == null || email == null) {

        res.status(400).json({
            'error': true,
            'cause': 'error in user entered data '
        })
        next();

    } else {


        try {


            const data = new model({
                username,
                password,
                email
            });
            let info = await data.save();
            console.log(info);





            res.status(200).json({
                "message": "account created sucessfully",
                'error': false,
                'cause': ''
            })

            next();


        } catch (error) {

            console.log(error);
            res.status(400).json({
                'error': true,
                'cause': 'duplicte account detected...!'
            })

        }
    }



}