const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const profileController = {};

profileController.editProfile = async (req, res, next) => {
  console.log("edit profile");
  const userId = req.user.id; // Authenticated user's ID
  // const { userId: paramUserId } = req.params; // User ID from the route params (admin routes)
  // const { role } = req.user.role; // User's role

  console.log(req.body);

  try {
    const updatedUser = await userService.updateUserById(
      parseInt(userId),
      req.body
    );

    res.status(200).json({ message: "completed edit" });
  } catch (err) {
    next(err);
  }
};

profileController.deleteProfile = async (req, res, next) => {
  const { userId } = req.params;

  try {
    await userService.deleteUserById(parseInt(userId));
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};

profileController.getAllUser = async (req, res, next) => {
  try {
    const allUser = await userService.getAllUser();
    res.status(200).json(allUser);
  } catch (err) {
    next(err);
  }
};

module.exports = profileController;
