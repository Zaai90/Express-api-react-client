import { NextFunction, Request, Response } from "express";

import { Product, productSchema } from "./product.model";
import {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem
} from "./product.repository";

export const getProducts = (req: Request, res: Response) => {
  res
    .status(200)
    .json(getItems())
    .on("error", (err: any) => {
      throw err;
    });
};

export const createProduct = (req: Request, res: Response) => {
  let newProduct: Product = req.body as Product;
  addItem(newProduct);
  res
    .status(201)
    .json(newProduct)
    .on("error", (err: Error) => {
      throw err;
    });
};

export const deleteProduct = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const success = deleteItem(req.params.id);
  if (success) {
    res
      .status(204)
      .json()
      .on("error", (err: Error) => {
        throw err;
      });
  } else {
    next();
  }
};

export const getProduct = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const product = getItem(req.params.id);
  console.log(product);
  if (product) {
    res
      .status(200)
      .json(product)
      .on("error", (err: Error) => {
        throw err;
      });
  }
  else {
    next();
  }
};

export const updateProduct = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const success = updateItem(req.params.id, req.body);
  if (success) {
    res
      .status(200)
      .json("Success")
      .on("error", (err: Error) => {
        throw err;
      });
  } else {
    next();
  }
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const result = productSchema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error);
  } else {
    next();
  }
};
