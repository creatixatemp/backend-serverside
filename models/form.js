"use strict";
const mongoose = require('mongoose');

const Schema= mongoose.Schema;
const formSchema = new Schema({
        name         : {type: String, minlength:2, maxlength: 100, required: true},
        email        : {type: String, minlength:2, maxlength: 100, required: true},
        contact      : {type: Number, minlength:2, maxlength: 15, required: true},
        message      : {type: String, minlength:2, maxlength: 450, required: true},
                
}, { timestamps : { 
    createdAt   : 'created_at',
    updatedAt   : 'updated_at' 
}});

module.exports = mongoose.model('form', formSchema,'forms');
