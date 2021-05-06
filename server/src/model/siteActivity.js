"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SiteActivity = Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    desc: {
        type: String
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdFor: {
        type: String,
        enum: ["superAdmin", "customer" ],
        default: "customer"
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


mongoose.model("SiteActivity", SiteActivity);