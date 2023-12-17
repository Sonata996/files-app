import Joi from "joi";

export const validateData = (req, res, next) => {
  const schema = Joi.object({
    fileName: Joi.string()
      .required()
      .messages({ "any.required": "Name is required" }),
    content: Joi.string()
      .required()
      .messages({ "any.required": "Content is required" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  next();
};
