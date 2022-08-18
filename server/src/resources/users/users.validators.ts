import { NextFunction, Request, Response } from "express";
import { users } from "./users.repository";

export function validateUserExist(
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

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  const isLoggedIn = true;
  if (isLoggedIn) { //TODO Lös den här
    next();
  } else {
    res.status(401).json({
      message: "Need to login first.",
    });
  }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  const isAdmin = true;
  if (isAdmin) { //TODO Lös den här
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
}

export function validateUserId(
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
