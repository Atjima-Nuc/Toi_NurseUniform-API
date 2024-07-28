module.exports = function checkAdmin(req, res, next) {
  if (req.user.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Admin only" });
  }
};
