import express from 'express';
import {
  addToShoppingcart,
  listCartItems,
  deleteFromShoppingcart,
} from '../controllers/shoppingcart-controller.mjs';

const router = express.Router();

router.route('/').get(listCartItems);

router.route('/').post(addToShoppingcart);

router.route('/:id').delete(deleteFromShoppingcart);
export default router;
