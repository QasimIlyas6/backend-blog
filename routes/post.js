const express = require("express");
const { createPost, getOnePost, getAllPosts, updatePost, deletePost } = require("../controllers/post");
const { JWT } = require("../middlewares/jwtAuth");

const router = express.Router();

router
  .post("/create", JWT , createPost)
  .put("/update/:id", updatePost)
  .get("/getAll", JWT, getAllPosts)
  .get('/getOne/:id', JWT , getOnePost)
  .delete('/delete/:id', JWT , deletePost)

module.exports = router;
