import Joi from "joi";

const addUserSchema = () => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });
};

export default addUserSchema;
