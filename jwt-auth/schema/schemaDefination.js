const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const schema = mongoose.Schema({

    username: {
        required: [true || 'enter username'],
        type: String,
        minlength: 3,
        unique: [true || 'same user exists alerady']
    },
    password: {
        required: true,
        type: String,
        minlength: 3,
        select: false
    },

    email: {
        type: String,
        minlength: 8,
        unique: [true || 'same email already exits']
    }



});



schema.pre('save', async function(next) {

    if (this.isModified('password')) {

        let salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }

    next();


})


schema.methods.compare = async function(password) {

    let check = await bcrypt.compare(password, this.password);
    return check;

}


const model = mongoose.model('USERS', schema);



module.exports = model;