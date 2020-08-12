const mongoose = require('mongoose');
const ListSchema = mongoose.Schema({
    title: String,
    description: String,
    coverPhoto: String,
    creator: String,
    numViews: Number,
    numVotes: Number,
    objects: [{ objectTitle: String, objectPhoto: String, votesFor: Number, votesAgainst: Number, elo: Number }]
});

const List = module.exports = mongoose.model('List', ListSchema);