import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";
import { User, productSchema } from "./users.model";
import {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "./users.repository";

export const getUsers = async (req: Request, res: Response) => {
  res
    .status(200)
    .json(getItems())
    .on("error", (err: any) => {
      console.log(err);
    });
};

export const createUser = (req: Request, res: Response) => {
  let newUser: User = req.body as User;
  newUser.id = nanoid();
  addItem(newUser);
  res
    .status(201)
    .json(newUser)
    .on("error", (err: any) => {
      console.log(err);
    });
};

export const deleteUser = (req: Request<{ id: string }>, res: Response) => {
  res
    .status(200)
    .json(deleteItem(req.params.id))
    .on("error", (err: any) => {
      console.log(err);
    });
};

export const getUser = (req: Request<{ id: string }>, res: Response) => {
  res
    .status(200)
    .json(getItem(req.params.id))
    .on("error", (err: any) => {
      console.log(err);
    });
};

export const updateUser = (req: Request<{ id: string }>, res: Response) => {
  updateItem(req.params.id, req.body);
  res.status(200).json("Ok");
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const result = productSchema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error);
  } else {
    next();
  }
};
