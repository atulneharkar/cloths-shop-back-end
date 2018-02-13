import moment from 'moment';

import Orders from '../models/orders';
import User from '../models/user';

/**
 * controller for create order
 * POST /order/create
 */
export const createOrder = (req, res) => {
  var order = new Orders({
    'productList': req.body.productList,
    'productDetails': req.body.productDetails,
    'totalPrice': req.body.totalPrice,
    'totalQuantity': req.body.totalQuantity,
    'createdDate': new Date(),
    'expectedDeliveryDate': moment(new Date()).add('days', 2),
    'userId': req.body.userId,
    'productSize': req.body.productSize
  }); 
  console.log(req.body.productList);
  console.log(req.body.productDetails);

  order.save().then(() => {
    User.findByIdAndUpdate(req.body.userId, {
      '$set': { 'myCart': [] }
    }, {
      'new': true,
      'runValidators': true,
      'context': 'query'
    })
    .then(updatedUser => {
      res.send(updatedUser);
    })
  }).catch((e) => {
    res.status(400).send(e);
  });
};

/**
 * controller to get all/specific order
 * GET /order/
 * search all/id
 */
export const getOrderList = (req, res) => {
  const search = {};

  if(req.params.userId !== 'null') {
    search.userId = req.params.userId;
  }

  Orders.find(search)
  .populate('productList')
  .then(orders => {
    res.status(200).send(orders);
  })
  .catch(err => {
    res.status(400).send(err);
  });
};

/**
 * controller to update existing order
 * PUT /order/:id
 */
export const updateOrder = (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, {
    '$set': req.body
  }, {
    'new': true,
    'runValidators': true,
    'context': 'query'
  })
  .then(updatedOrders => {
    res.status(200).send(updatedOrders);
  })
  .catch(err => {
    res.status(400).send(err);
  });
};

