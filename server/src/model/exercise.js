"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = Schema({
    
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'ExerciseCategory'
    },
    exerciseName: {
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

mongoose.model("Exercise", Exercise);