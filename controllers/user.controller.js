import User from "../models/user.model.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id).select("-password");
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser };
