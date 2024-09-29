const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token in verifyToken: ", token); // Check full token

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    // Remove 'Bearer ' from the token string
    const tokenWithoutBearer = token.split(" ")[1];
    console.log("Token without Bearer: ", tokenWithoutBearer); // Log stripped token

    const secretKey = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(tokenWithoutBearer, secretKey);

    req.userId = decodedToken.id; // Store user ID or other info if needed
    console.log("userid in verifyToken ", decodedToken.id);

    next(); // Continue to the next middleware or route handler
  } catch (err) {
    console.error("JWT verification error: ", err.message); // Log error message
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
