import mongoose from "mongoose";
import Post from "../Models/Post.js";
import User from "../Models/user.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user");

    if (!posts) {
      return res.status(500).json({ Message: "No Posts Exists" });
    }

    return res.status(200).json({ posts });
  } catch (err) {
    return console.log(err);
  }
};

export const getPostByID = async (req, res) => {
  const postId = req.params.id;

  try {
    const currPost = await Post.findById(postId);

    if (!currPost) {
      return res.status(404).json({ Message: "Post Does Not Exists" });
    }

    return res.status(200).json({ currPost });
  } catch (err) {
    return console.log(err);
  }
};

export const createPosts = async (req, res) => {
  const { title, description, image, location, date, user } = req.body;

  try {
    if (!title || !description || !image || !location || !date || !user) {
      return res
        .status(422)
        .json({ Message: "Please Enter the values for above fields" });
    }

    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ Message: "User Not Found" });
    }

    const newPost = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.Posts.push(newPost);
    await existingUser.save({ session });
    await newPost.save({ session });
    session.commitTransaction();

    if (!newPost) {
      return res.status(500).json({ Message: "Unexpected Error Occurred" });
    }

    return res.status(201).json({ newPost });
  } catch (err) {
    return console.log(err);
  }
};

export const updatePosts = async (req, res) => {
  const postid = req.params.id;
  const { title, description, image, location } = req.body;

  try {
    if (
      !title &&
      title.trim === "" &&
      !description &&
      title.trim === "" &&
      !image &&
      image.trim === "" &&
      !location &&
      location.trim === ""
    ) {
      return res.status(422).json({ Message: "Invalid Data" });
    }

    const post = await Post.findByIdAndUpdate(postid, {
      title,
      description,
      image,
      location,
    });

    if (!post) {
      return res.status(500).json({ Message: "Unexpected Error Occurred" });
    }

    return res.status(200).json({ Message: "Update Successfull" });
  } catch (err) {
    return console.log(err);
  }
};

export const deletePost = async (req, res) => {
  const postid = req.params.id;

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const post = await Post.findById(postid).populate("user");
    post.user.Posts.pull(post);
    await post.user.save({ session });
    const postToDelete = await Post.findByIdAndRemove(postid);
    session.commitTransaction();

    if (!post) {
      return res.status(500).json({ Message: "Unable to delete" });
    }

    return res.status(200).json({ Message: "Deleted Successfully" });
  } catch (err) {
    return console.log(err);
  }
};
