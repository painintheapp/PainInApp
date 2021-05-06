"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = Schema({
    categoryNo: {
        type: String
    },
    categoryName: {
        type: String
    },
    subcategory: {
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

mongoose.model("Category", Category);