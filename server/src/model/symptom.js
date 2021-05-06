"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Symptom = Schema({
    symptomName: {
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

mongoose.model("Symptom", Symptom);