"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
const url = "mongodb://localhost:27017/" + process.env.DB_NAME
var connection = mongoose.createConnection(url);
autoIncrement.initialize(connection);

const Specialist = Schema({
    fullName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    speciality: {
        type: Schema.Types.ObjectId,
        ref: 'Occupation'
    },
    conditionKnowledgeBase: [{
        type: Schema.Types.ObjectId,
        ref: 'Condition'
    }],
    email: {
        type: String,
        trim: true,
        unique: true
    },
    location: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    youtube: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    profileImageUrl: {
        type: String,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["active", "block", "deleted"],
        default: "active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

Specialist.plugin(autoIncrement.plugin, {
    model: 'Specialist',
    field: 'specialistId',
    startAt: 1,
    incrementBy: 1
});


mongoose.model("Specialist", Specialist);