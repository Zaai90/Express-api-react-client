import express from 'express';
import {createProduct, getProduct, getProducts, updateProduct, deleteProduct} from './product.controller';
import {validateProduct} from '../middlewares/validators';

const router = express.Router();
router.post('/', validateProduct, createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:id', getProduct);

export default router;