import express from 'express';
import productRouter from './product/product.router';

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.static("public"));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);


app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}`);
});

export default app;