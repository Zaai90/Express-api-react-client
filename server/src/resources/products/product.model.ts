import Joi from "joi";

export interface Product {
    id?: string;
    name: string;
    price: number;
  };


export const productSchema = Joi.object<Product, true>({
    id: Joi.string().optional(),
    name: Joi.string().required().min(3).max(50),
    price: Joi.number().required().min(1).max(1000)
});