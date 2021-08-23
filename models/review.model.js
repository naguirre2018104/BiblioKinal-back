'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = Schema({
    author: String,
    title: String,
    edition: Number,
    key_words: [String],
    description: String,
    topics: [String],
    copies: Number,
    available: Number,
    frequency: String,
    examples: Number
});

module.exports = mongoose.model('review', reviewSchema);