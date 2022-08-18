import Joi from "joi";

export interface User {
  id?: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

export const productSchema = Joi.object<User, true>({
  id: Joi.string().optional(),
  username: Joi.string().required().min(3).max(50),
  password: Joi.string().required().min(3).max(50),
  firstname: Joi.string().optional().min(2).max(50),
  lastname: Joi.string().optional().min(2).max(50),
  email: Joi.string().required().email().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
  role: Joi.string().optional().min(3).max(50)
});