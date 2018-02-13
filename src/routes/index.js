import express from 'express';

/* all routes */
import authenticationRoutes from './authenticate';
import userRoutes from './user';
import productRoutes from './product';
import categoryRoutes from './category';
import ordersRoutes from './orders';
import queryRoutes from './contact-us';

/* all common routes goes here */
import commonRoutes from './common';

/* all middlewares */
import { isAuthorizedUser } from '../middlewares/authenticate';

const routes = express.Router();

/**
 * all authentication routes
 * POST /user/login
 * DELETE /user/logout
 */
routes.use('/user', authenticationRoutes);

/**
 * all user routes
 * POST /user/create
 * PUT /user/update/:id
 */
routes.use('/user', isAuthorizedUser, userRoutes);

/**
 * all product routes
 * POST /product
 * DELETE /product
 */
routes.use('/product', productRoutes);

/**
 * all category routes
 * POST /category
 * DELETE /category
 */
routes.use('/category', categoryRoutes);

/**
 * all category routes
 * POST /category
 * DELETE /category
 */
routes.use('/orders', isAuthorizedUser, ordersRoutes);

/**
 * all user queries routes
 * POST /queries/add
 * GET /queries/getall
 */
routes.use('/query', queryRoutes);

/**
 * all common routes goes here
 * GET /upload/:type/:file
 */
routes.use(commonRoutes);

export default routes;