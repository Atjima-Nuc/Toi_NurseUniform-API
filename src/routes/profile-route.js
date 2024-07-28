const express = require("express");
const { editProfileValidator } = require("../middlewares/validator");
const profileController = require("../controllers/profile-controllers");
const authenticate = require("../middlewares/authenticate");
const checkAdmin = require("../middlewares/checkAdmin");

const profileRouter = express.Router();

profileRouter.get(
  "/admin/getAllUser",
  authenticate,
  profileController.getAllUser
);

profileRouter.patch("/", authenticate, profileController.editProfile);

// profileRouter.patch(
//   "/admin/:userId",
//   authenticate,
//   checkAdmin,
//   profileController.editProfile
// );
profileRouter.delete(
  "/admin/delete/:userId",
  authenticate,
  checkAdmin,
  profileController.deleteProfile
);

module.exports = profileRouter;
