const User = require("../database/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res
      .status(201)
      .json({ message: "Successfully got the users", data: users });
  } catch (error) {
    res.send("error occurred while fetching data", error);
  }
};
exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById({ _id: id });
    res.status(201).json({ message: "Successfully got the user", data: user });
  } catch (error) {
    res.send("error occurred while fetching data", error);
  }
};

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await User.create({ email, password: hashedPassword });
  res.send({ message: "user has been created", data: user });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    res.send("User does not exists");
  } else {
    const passwordMatched = await bcrypt.compare(password, userExist.password);
    if (passwordMatched) {
      const token = await jwt.sign(
        { userId: userExist._id, email: userExist.email },
        'my_secret'
      );
      res
        .cookie("authToken", token, { httpOnly: true })
        .status(200)
        .json({ token, userExist });
    } else {
      res.send("incorrect password");
    }
  }
};
