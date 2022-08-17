import { Request, Response, NextFunction } from "express";
// import Product from "../product/product.model";
// import {getProducts as products} from "../product/product.database";

//Middleware functions
function validateProduct(req:Request, res:Response, next:NextFunction) {
    if(req.body.name && req.body.price) {
      if(true) {
      next();
      }else{
        // res.status(400).json({
          // message: 'Product already exists'
        }
     }
    else {
      res.status(400).json({
        message: 'Bad Request'
      });
    }
  }

  export {validateProduct};