"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Polls = Schema({
    pollname: {
        type: String
    },
    community: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    article: {
        type: String,
        trim: true,
        unique: true
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


mongoose.model("Polls", Polls);