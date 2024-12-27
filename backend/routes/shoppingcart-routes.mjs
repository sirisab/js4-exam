import express from 'express';
import {
  addToShoppingCart,
  listCartItems,
} from '../controllers/shoppingcart-controller.mjs';

const router = express.Router();

router.route('/').get(listCartItems);

export default router;
