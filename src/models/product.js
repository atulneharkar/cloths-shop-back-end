import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  'productName': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter title'],
  },
  'productDescription': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'productCategory': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'sizes': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'originalPrice': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'customerPrice': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'availablity': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'productImage': {}
});

const Product = mongoose.model('Product', productSchema);

export default Product;