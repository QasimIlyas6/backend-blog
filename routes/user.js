const express = require ("express");
const {
  getAllUsers,
  getOneUser,
  registerUser,
  loginUser,
} = require("../controllers/user");
const { JWT } = require("../middlewares/jwtAuth");
const router = express.Router();

router
  .get("/getAll", JWT, getAllUsers)
  .get("/getOne/:id", JWT, getOneUser)
  .post("/register", registerUser)
  .post("/login", loginUser);

module.exports = router;
