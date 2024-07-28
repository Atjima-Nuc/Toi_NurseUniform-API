const { registerSchema, loginSchema } = require("../validator/auth-validator");
const { editProfileSchema } = require("../validator/profile-validater");

exports.registerValidator = (req, res, next) => {
  const { value, error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  req.input = value;
  next();
};

exports.loginValidator = (req, res, next) => {
  const { value, error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  req.input = value;
  next();
};

exports.editProfileValidator = (req, res, next) => {
  const { value, error } = editProfileSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  req.input = value;
  next();
};
