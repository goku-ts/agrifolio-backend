import Joi from "joi"

import { UserLoginTypes, UserRegisterTypes } from "../types/types"


export const validateRegister = (body: UserRegisterTypes) => {
  const validationschema = Joi.object<UserRegisterTypes>({
    email: Joi.string().email().required(),
    businessName: Joi.string().required().min(5).max(30),
    password: Joi.string().required().min(6).max(25),
  })

  return validationschema.validate(body)
}

export const validateLogin = (body: UserLoginTypes) => {
  const validationschema = Joi.object<UserLoginTypes>({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(25)
    // .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
  })

  return validationschema.validate(body)
}



export const validatePost = (body) => {
  const validationschema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    description: Joi.string().required(),
  })

  return validationschema.validate(body)
}


