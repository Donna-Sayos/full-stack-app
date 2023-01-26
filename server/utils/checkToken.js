const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
//   const token = req.headers.authorization;
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "Access denied. No token provided.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded is the payload of the token and it contains the userId;
    next(); // this is for moving on to the next middleware;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      // refresh the token
      const userId = req.user.userId;
      const newToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res.set("Authorization", newToken);
      next();
    } else {
      return res.status(401).json({
        status: "fail",
        message: "Invalid token.",
      });
    }
  }
};

module.exports = checkToken;