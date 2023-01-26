const checkAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      status: "fail",
      message:
        "You do not have the necessary permissions to access this route.",
    });
  }
  next(); // if the user is an admin, then the next middleware function will be called;
};

module.exports = checkAdmin;