const Post = require("../database/postModel.js");

exports.createPost = async (req, res) => {
  const { title, description } = req.body;
  const { userId } = req.token;
  try {
    const post = await Post.create({ title, description, userId });
    res.status(201).send({ message: "post has been created", data: post });
  } catch (error) {
    console.log("Error occur while creating post", error);
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res
      .status(201)
      .json({ message: "successfully got all the posts ...", data: allPosts });
  } catch (error) {
    console.log("error is...", error);
  }
};

exports.getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    res.status(203).send({ message: "Successfully got the post", data: post });
  } catch (error) {
    console.log("the error occur while editing", error);
  }
};

exports.updatePost = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  //    const {userId} = req.token;
  try {
    const updatedUser = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res
      .status(203)
      .send({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.log("error while updating post...", error);
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).send({ message: "post has been deleted" });
  } catch (error) {
    console.log("The error is :", error);
  }
};
