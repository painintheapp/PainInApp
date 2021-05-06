"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Community = Schema({
    communityName: {
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


mongoose.model("Community", Community);