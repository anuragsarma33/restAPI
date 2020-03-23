const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema Structure
const Product = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    created: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'products'
});
module.exports = mongoose.model('Product', Product);