const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twitterSchema = new mongoose.Schema({
    text: {type: String, required: true},
    createdDate:{type:Date,default:Date.now},
    Image:{type: String, required: true},
    Reply:{type: Boolean, required: true},
    author:{ type: Schema.Types.ObjectId, ref: 'user' },
    likedUsers:[{ type: Schema.Types.ObjectId, ref: 'user' }],
    replies: [{ type: Schema.Types.ObjectId, ref: 'twitter' }],
    child: { type: Schema.Types.ObjectId, ref: 'twitter' },
    parent: { type: Schema.Types.ObjectId, ref: 'twitter' },
    retweeters: [{ type: Schema.Types.ObjectId, ref: 'user' }],
});

var twitter = mongoose.model('twitter', twitterSchema);

module.exports = twitter