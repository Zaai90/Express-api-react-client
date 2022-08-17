import { Request, Response, NextFunction } from "express";
import {products} from "../product/product.database";

function validateProduct(req:Request, res:Response, next:NextFunction) {
    if(req.body.name && req.body.price) {
      if(!products.find(product => product.name === req.body.name)) {
        if(req.body.name == typeof('string')
          && req.body.price == typeof('number')) {
            next();
        }
      }else{
        res.status(400).json({
          message: 'Product already exists'
        });
      }
     }
    else {
      res.status(400).json({
        message: 'Bad Request'
      });
    }
  }

  function validateProductId(req:Request, res:Response, next:NextFunction) {
    if(req.params.id) {
      if(products.find(product => product.id === req.params.id)) {
        next();
      }else{
        res.status(204).json({
          message: 'Product not found'
        });
      }
    }else{
      res.status(400).json({
        message: 'Bad Request'
      });
    }
  }

  export {validateProduct, validateProductId};