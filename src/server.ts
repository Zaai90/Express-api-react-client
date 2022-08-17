import express from 'express';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
let products : Product[] = [];

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', router);

//Home
app.get('/', (req:express.Request, res:express.Response) => {
    res.status(200).json('Home');
} );

//Routes
router.get('/get', getProducts);
router.post('/create', (req, res, next) => {
  if(req.body.name && req.body.price) {
   next();
  }
  else {
    res.status(400).json({
      message: 'Bad Request'
    });
  }
}, createProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/get/:id', getProduct);
router.put('/update/:id', updateProduct);


//Controllers
function getProducts (req:express.Request, res:express.Response) {
  res.status(200).json(products).on('error', (err:any) => {
  console.log(err);
});
}

function createProduct(req: express.Request , res : express.Response) {
  let newProduct : Product = req.body as Product;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(200).json(newProduct).on('error', (err:any) => {
    console.log(err);
  } );
}

function deleteProduct(req:express.Request, res:express.Response) {
  res.status(200).json("res");
}

function getProduct(req:express.Request, res:express.Response) {
  res.status(200).json("res");
}

function updateProduct(req:express.Request, res:express.Response) {
  res.status(200).json("res");
}

app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}`);
});

//Models
interface Product {
  id?: number;
  name: string;
  price: number;
};
