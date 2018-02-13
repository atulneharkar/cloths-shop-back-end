import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ordersSchema = new mongoose.Schema({
  'productList': [{
    'type': Schema.Types.ObjectId,
    'ref': 'Product'
  }],
  'productDetails': [{
    'customerPrice': {
      'type': Number
    },
    'quantity': {
      'type': Number
    },
    'originalPrice': {
      'type': Number
    }
  }],
  'totalPrice': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'productSize': [{
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  }],
  'totalQuantity': {
    'type': String,
    'trim': true,
    // 'required': [true, 'Please enter description'],
  },
  'createdDate': {
    'type': Date,
    'trim': true,
  },
  'expectedDeliveryDate': {
    'type': Date,
    'trim': true,
  },
  'status': {
    'type': String,
    'enum': {
      'values': ['open', 'shipped', 'delivered', 'cancelled']
    },
    'default': 'open'
  },
  'userId': {
    'type': Schema.Types.ObjectId,
    'ref': 'User'
  },
});

const Orders = mongoose.model('Orders', ordersSchema);

export default Orders;