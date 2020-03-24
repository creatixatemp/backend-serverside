"use strict";
const mongoose = require('mongoose');

const Schema= mongoose.Schema;
const formSchema = new Schema({
        name         : {type: String, maxlength: 100, required: true},
        email        : {type: String, maxlength: 150, required: true},
        contact      : {type: String, maxlength: 150, required: true},
        message      : {type: String, maxlength: 150, required: true},
                
}, { timestamps : { 
    createdAt   : 'created_at',
    updatedAt   : 'updated_at' 
}});

module.exports = mongoose.model('form', formSchema,'forms');