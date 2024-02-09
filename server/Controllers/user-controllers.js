import user from "../Models/user.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await user.find();
    if (!users) {
      return res.status(404).json({ Message: "No User Found" });
    }

    return res.status(200).json({ users });
  } catch (err) {
    return console.log(err);
  }
};

export const getUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const new_user = await user.findById(id).populate("Posts")

    if (!new_user) {
      return res.status(404).json({ Message: "User Not Found" });
    }

    // console.log(new_user);

    return res.status(200).json({ new_user });
  } catch (err) {
    return console.log(err);
  }
};

export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(404).json({ Message: "Please Enter Your Credentials" });
    }

    const existingUser = await user.findOne({ Email: email });

    if (existingUser) {
      return res.status(422).json({ Message: "User Alredy Exists" });
    }

    const saltRounds = 10;

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = new user({
      Name: name,
      Email: email,
      Password: hashedPassword,
    });
    console.log(newUser._id);

    await newUser.save();

    return res.status(201).json({ id: newUser._id, newUser });
  } catch (err) {
    return console.log(err);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({ Message: "Please Enter Your Credentials" });
    }

    const existingUser = await user.findOne({ Email: email });

    if (!existingUser) {
      return res.status(404).json({ Message: "User Does Not Exists" });
    }

    const existingUserPassword = bcrypt.compareSync(
      password,
      existingUser.Password
    );

    if (!existingUserPassword) {
      return res.status(400).json({ Message: "Invalid Credentials" });
    }

    return res
      .status(200)
      .json({ id: existingUser._id, Message: "Login Successfull" });
  } catch (err) {
    return console.log(err);
  }
};
