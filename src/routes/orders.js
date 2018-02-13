import express from 'express';

/* all controllers */
import {
  getOrderList,
  updateOrder,
  createOrder
} from '../controllers/orders';

const ordersRoutes = express.Router();

/**
 * ortder create
 * POST /ortder/create
 */
ordersRoutes.post('/create', createOrder);

/**
 * route to get list of ortders
 * GET /ortder/list/:status [all, pending, active, inactive]
 */
ordersRoutes.get('/list/:status/:userId', getOrderList);

/**
 * route to update specific ortder
 * PUT /ortder/:id
 */
ordersRoutes.put('/:id', updateOrder);

export default ordersRoutes;