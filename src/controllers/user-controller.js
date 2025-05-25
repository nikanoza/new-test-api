import User from "../models/User.js";
import addUserSchema from "../schemas/add-user-schema.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error, "this error");
    return res.status(500).json({
      message: "An error occurred while fetching users",
    });
  }
};

export const createUser = async (req, res) => {
  const { body } = req;

  try {
    const validator = addUserSchema();
    const { error, value } = validator.validate(body);

    if (error) {
      return res.status(400).json({ message: error.details });
    }

    const { name, email } = value;
    const user = new User({ name, email });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error(error, "this error");
    return res.status(500).json({
      message: "An error occurred while creating the user",
    });
  }
};
