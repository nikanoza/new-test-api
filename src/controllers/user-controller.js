import User from "../models/User.js";

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
  const { name, email } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }
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
