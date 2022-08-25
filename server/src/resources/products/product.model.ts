import Joi from "joi";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageurl: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
};

export const productSchema = Joi.object<Product, true>({
  id: Joi.string().empty(''),
  name: Joi.string().required().min(3).max(50),
  price: Joi.number().required().min(1).max(1000),
  category: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(3).max(1000),
  imageurl: Joi.string().min(3).max(1000).empty(''),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  version: Joi.number()
});
