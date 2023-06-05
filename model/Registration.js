const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }    
})

module.exports = mongoose.model('Registration', registrationSchema);