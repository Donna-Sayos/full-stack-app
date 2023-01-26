const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  const token = req.headers["x-access-token"]; // x-access-token means that the token is sent in the headers of the request;
  console.log("checkToken: token = ", token);
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "Access denied. No token provided.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // this is for moving on to the next middleware;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.json({
        status: "fail",
        auth: false,
        message: "Failed to authenticate token.",
      });
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
