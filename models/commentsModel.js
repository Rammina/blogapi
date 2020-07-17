const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: String, minlength: 1, maxlength: 100, required: true },
    body: { type: String, minlength: 1, maxlength: 500, required: true },
    date: { type: Date, default: Date.now() }
});

commentSchema.virtual('dateFormatted')
    .get(function () {
        return moment(this.date).format('a, ddd DD MMMM, YYYY');
    })

module.exports = mongoose.model('Message', commentSchema);