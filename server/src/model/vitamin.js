"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Vitamin = Schema({
    vitaminName: {
        type: String
    },
    
   
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("Vitamin", Vitamin);