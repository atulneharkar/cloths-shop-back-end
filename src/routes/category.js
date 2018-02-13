import express from 'express';

/* all controllers */
import {
  getCategoryByID,
  getCategoryList,
  updateCategory,
  createCategory,
  removeCategory
} from '../controllers/category';

/* all middlewares */
import { isAuthorizedUser } from '../middlewares/authenticate';

const categoryRoutes = express.Router();

/**
 * category create
 * POST /category/create
 */
categoryRoutes.post('/create', isAuthorizedUser, createCategory);

/**
 * route to get specific category's info
 * GET /category/:id
 */
categoryRoutes.get('/:id', isAuthorizedUser, getCategoryByID);

/**
 * route to get list of products
 * GET /category/list/:status [all, pending, active, inactive]
 */
categoryRoutes.get('/list/:status', getCategoryList);

/**
 * route to update specific category
 * PUT /category/:id
 */
categoryRoutes.put('/:id', isAuthorizedUser, updateCategory);

/**
 * route to delete existing category
 * DELETE /category/id
 */
categoryRoutes.delete('/:id', isAuthorizedUser, removeCategory);

export default categoryRoutes;