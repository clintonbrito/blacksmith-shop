import { Router } from 'express';

import orderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderController.findAll);

export default orderRouter;