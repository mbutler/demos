const jwt = require('jsonwebtoken');
const model = require('../schema/schemaDefination');
require('dotenv').config();

exports.login = async(req, res, next) => {


    // this is the name of input type parameter of frontend
    // <input name ='username'>...</input>

    let { username, password } = req.body;


    if (!username || !password) {
        res.status(400).json({
            'error': true,
            'cause': 'error in user entered data '
        })
        next();
    }

    try {
        //  SEARCH THAT THE USER EXITS IN DATABASE
        // you may search it with email also it is also unique 

        let data = await model.findOne({ username }).select('password');
        let result = await data.compare(password);
        console.log(result);

        if (data && result == true) {
            let payload = {
                '_id': data._id
            }


            let token = jwt.sign(payload, process.env.secret);



            //     NOTE :  YOU SET THIS TOKEN IN HEADER OF URL FROM YOUR FRONTEND


            res.status(200).json({
                'error': false,
                'cause': ' ',
                'token': token

            })

            next();
        } else {

            res.status(400).json({
                'error': true,
                'cause': ' invalid',


            })
            next();
        }

    } catch (error) {

        console.log(error);
        res.status(500).json({
            'error': true,
            'cause': 'error in server '
        })
        next();
    }


}