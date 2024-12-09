import express from 'express';
import {
  listArtworks,
  findArtworks,
} from '../controllers/artworks-controller.mjs';

const router = express.Router();

router.route('/').get(listArtworks);
router.route('/:id').get(findArtworks);

export default router;
