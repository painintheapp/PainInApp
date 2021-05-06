"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
const url = "mongodb://localhost:27017/" + process.env.DB_NAME
var connection = mongoose.createConnection(url);
autoIncrement.initialize(connection);
const Condition = Schema({
    conditionName: {
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
Condition.plugin(autoIncrement.plugin, {
    model: 'Condition',
    field: 'conditionId',
    startAt: 1,
    incrementBy: 1
  });
mongoose.model("Condition", Condition);