const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const data = req.input;
    const existUser = await userService.findUserByUsername(data.username);
    if (existUser) {
      createError({
        message: "Username is already in use.",
        statusCode: 400,
      });
    }
    data.password = await hashService.hash(data.password);
    await userService.createUser(data);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

authController.login = async (req, res, next) => {
  try {
    const existUser = await userService.findUserByUsername(req.input.username);
    if (!existUser) {
      createError({ message: "invalid credentials", statusCode: 400 });
    }

    const isMatch = await hashService.compare(
      req.input.password,
      existUser.password
    );
    if (!isMatch) {
      createError({ message: "invalid credentials", statusCode: 400 });
    }

    const accessToken = jwtService.sign({ id: existUser.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

authController.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports = authController;
