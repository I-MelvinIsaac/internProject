const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stockStatus: { type: String, enum: ['In Stock', 'Out of Stock'], default: 'In Stock' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    images: [{ type: String }],
    videos: [{ type: String }],
    specifications: { type: Map, of: String },  // Example: { "Weight": "500g", "Color": "Red" }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);