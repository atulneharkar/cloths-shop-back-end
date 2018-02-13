import express from 'express';

/* all controllers */
import {
  getProductByID,
  getProductList,
  updateProduct,
  createProduct,
  removeProduct,
  setProductImage,
  addProductToCart,
  removeProductFromCart
} from '../controllers/product';

/* pic upload */
import { avatarUpload } from '../helpers/upload';

/* all middlewares */
import { isAuthorizedUser } from '../middlewares/authenticate';

const productRoutes = express.Router();

/**
 * product create
 * POST /product/create
 */
productRoutes.post('/create', isAuthorizedUser, createProduct);

/**
 * route to get specific product's info
 * GET /product/:id
 */
productRoutes.get('/:id', getProductByID);

/**
 * route to get list of products
 * GET /product/list/:category 
 */
productRoutes.get('/list/:category', getProductList);

/**
 * route to add product to cart
 * PUT /addToCart/:productId/:userId
 */
productRoutes.put('/addToCart/:productId/:userId', isAuthorizedUser, addProductToCart);

/**
 * route to remove product from cart
 * PUT /removeFromCart/:productId/:userId
 */
productRoutes.put('/removeFromCart/:productId/:userId', isAuthorizedUser, removeProductFromCart);

/**
 * route to update specific product
 * PUT /product/:id
 */
productRoutes.put('/:id', isAuthorizedUser, updateProduct);

/**
 * route to delete existing trending
 * DELETE /trending/new
 */
productRoutes.delete('/:id', isAuthorizedUser, removeProduct);

/**
 * route to set trending image
 * POST /trending/trendingImage
 */
productRoutes.post('/productImage/:id', isAuthorizedUser, avatarUpload, setProductImage);


export default productRoutes;