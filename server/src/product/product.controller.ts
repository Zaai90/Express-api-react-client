import {Request, Response} from 'express';
import {nanoid} from 'nanoid';
import Product from './product.model';
import {products, getItems, getItem, addItem, updateItem, deleteItem} from './product.database';


function getProducts (req:Request, res:Response) {
    res.status(200).json(getItems()).on('error', (err:any) => {
    console.log(err);
  });
  }
  
  function createProduct(req: Request , res : Response) {
    let newProduct : Product = req.body;
    newProduct.id = nanoid();
    addItem(newProduct);
    res.status(201).json(newProduct).on('error', (err:any) => {
      console.log(err);
    } );
  }
  
  function deleteProduct(req:Request, res:Response) {
    res.status(200).json(deleteItem(req.params.id)).on('error', (err:any) => { console.log(err); } );
  }
  
  function getProduct(req:Request, res:Response) {
    res.status(200).json(getItem(req.params.id)).on('error', (err:any) => { console.log(err); } );
  }
  
  
  function updateProduct(req:Request, res:Response) {
    updateItem(req.params.id, req.body);
    res.status(200).json("Ok");
  }
  export { getProducts, createProduct, deleteProduct, getProduct, updateProduct };