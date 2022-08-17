import {Request, Response} from 'express';
import Product from './product.model';
import products from './product.database';

//Controllers
function getProducts (req:Request, res:Response) {
    res.status(200).json(products).on('error', (err:any) => {
    console.log(err);
  });
  }
  
  function createProduct(req: Request , res : Response) {
    let newProduct : Product = req.body as Product;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct).on('error', (err:any) => {
      console.log(err);
    } );
  }
  
  function deleteProduct(req:Request, res:Response) {
    res.status(200).json("res");
  }
  
  function getProduct(req:Request, res:Response) {
    res.status(200).json(products[Number(req.params.id) - 1]).on('error', (err:any) => { console.log(err); } );
  }
  
  
  function updateProduct(req:Request, res:Response) {
    res.status(200).json("res");
  }
  export { getProducts, createProduct, deleteProduct, getProduct, updateProduct };