import { Router } from 'express';
import productController from '../controllers/productController.js';

const productRoute = Router();

productRoute.get('/api/products', productController);
productRoute.post('/api/products', productController);

export default productRoute;
