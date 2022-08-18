import express from 'express';
require('express-async-errors');

import { errorHandler, notFoundHandler } from './resources/middlewares';
import productRouter from './resources/products/product.router';
import userRouter from './resources/users/users.router';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use(notFoundHandler, errorHandler);
app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}`);
});

export default app;