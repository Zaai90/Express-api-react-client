import { NextFunction, Request, Response } from "express";
import { users } from "./users.repository";

export function validateProductExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!users.find((user) => user.username === req.body.username)) {
    next();
  } else {
    res.status(400).json({
      message: "User already exists",
    });
  }
}

export function validBody(req: Request, res: Response, next: NextFunction) {
  //Todo check if props has valid types
  if (req.body.name && req.body.price && checkPropLength(req.body)) {
    next();
  } else {
    res.status(400).json({
      message: "Invalid body",
    });
  }
}

function checkPropLength(body: Object) {
  const bodyprops: string[] = Object.keys(body);
  return bodyprops.length === 2;
}

export function validateProductId(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  if (req.params.id) {
    if (users.find((product) => product.id === req.params.id)) {
      next();
    } else {
      res.status(204).json({
        message: "Object not found",
      });
    }
  } else {
    res.status(400).json({
      message: "Bad Request",
    });
  }
}
