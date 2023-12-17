export const checkExtention = (req, res, next) => {
  const EXTENTIONS = ["jsx", "html", "css", "js", "json"];
  const { fileName } = req.body;
  const findFormate = EXTENTIONS.find((elem) => fileName.endsWith(elem));
  if (!findFormate) {
    res.status(400).json({ message: "Formate failed" });
    return;
  }
  next();
};
