const Joi = require("joi");

exports.editProfileSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  username: Joi.string().pattern(/^[a-zA-Z0-9_-]{6,}$/),
  phoneNo: Joi.string().pattern(/^[0-9]{10}$/),
  email: Joi.string().email({ tlds: false }),
});
