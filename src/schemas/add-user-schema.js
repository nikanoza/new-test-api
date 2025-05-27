import Joi from "joi";

const addUserSchema = () => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
};

export default addUserSchema;
