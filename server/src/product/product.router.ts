import express from 'express';
import Product from './product.model';
import { createProduct, getProduct, getProducts, updateProduct, deleteProduct } from './product.controller';
import { validateProductExist, validBody, validateProductId } from '../middlewares/validators';

const router = express.Router();
router.post('/', validBody, validateProductExist, createProduct);
router.get('/get', getProducts);
router.put('/:id', validateProductId, updateProduct);
router.delete('/delete/:id', validBody, validateProductExist, validateProductId, deleteProduct);
router.get('/:id', validateProductId, getProduct);

export default router;