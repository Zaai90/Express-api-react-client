import { NextFunction, Request, Response } from "express";
import { products } from "./product.repository";

export function validateProductNotExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!products.find((product) => product.name === req.body.name)) {
    next();
  } else {
    res.status(400).json({
      message: "Product already exists",
    });
  }
}

export function validateProductId(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  if (req.params.id) {
    if (products.find((product) => product.id === req.params.id)) {
      next();
    } else {
      res.status(204).json({
        message: "Product not found",
      });
    }
  } else {
    res.status(400).json({
      message: "Bad Request",
    });
  }
}
