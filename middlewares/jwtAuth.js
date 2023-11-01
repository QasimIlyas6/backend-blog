const jwt = require("jsonwebtoken");



const JWT = async (req, res, next) => {
  
  const authHeader = req.cookies;
  if (!authHeader) {
    res.status(400).send("Invalid token");
    return;
  }

  const token = authHeader.authToken;
  const SECRET_KEY = process.env.SECRET_KEY;
  jwt.verify(token, 'my_secret', (err, data) => {
    // console.log("the data is ...", data);
    if (err) {
      res.status(400).send("Invalid token", err);
    } else {
      req.token = data;
      next();
    }
  });
};

module.exports = { JWT };
