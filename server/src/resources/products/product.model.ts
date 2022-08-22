import Joi from "joi";

export interface Product {
  id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;
};

export const productSchema = Joi.object<Product, true>({
  id: Joi.string(),
  name: Joi.string().required().min(3).max(50),
  price: Joi.number().required().min(1).max(1000),
  category: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(3).max(1000),
  image: Joi.string().min(3).max(1000),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  version: Joi.number()
});
