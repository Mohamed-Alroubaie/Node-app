import { Router } from 'express';
import productController from '../controllers/productController.js';

const productRoute = Router();

productRoute.use('/api/products', productController);

export default productRoute;
