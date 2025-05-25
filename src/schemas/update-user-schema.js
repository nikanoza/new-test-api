import Joi from "joi";

const updateUserSchema = () => {
  return Joi.object({
    email: Joi.string().email().required(),
  });
};

export default updateUserSchema;
