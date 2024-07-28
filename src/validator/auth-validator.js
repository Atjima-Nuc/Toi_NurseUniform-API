const Joi = require("joi");

const SexEnumType = { male: "Male", female: "Female" };

exports.registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9_-]{6,}$/)
    .required()
    .trim(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
  phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  email: Joi.string().email({ tlds: false }),
  sex: Joi.string()
    .valid(...Object.values(SexEnumType))
    .required(),
});

exports.loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
