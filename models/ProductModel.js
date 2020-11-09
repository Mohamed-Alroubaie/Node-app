import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Product most have a title'],
    maxlength: [100, 'Product most have les then 100 Words'],
  },
  price: {
    type: Number,
    required: [true, 'Product most have a Price'],
  },
  description: String,
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
