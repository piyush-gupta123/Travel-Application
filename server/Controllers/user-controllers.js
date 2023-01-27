import user from "../Models/user";
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

export const registerUser = async (req, res, next) => {
  const { Name, Email, Password } = req.body;
  try {
    if (!Name || !Email || !Password) {
      return res.status(404).json({ Message: "Please Enter Your Credentials" });
    }

    const existingUser = await user.findOne({Email });

    if (existingUser) {
      return res.status(422).json({ Message: "User Alredy Exists" });
    }

    const saltRounds = 10;

    const hashedPassword = bcrypt.hashSync(Password, saltRounds);

    const newUser = new user({ Name, Email, Password: hashedPassword });

    await newUser.save();

    return res.status(201).json({ newUser });
  } catch (err) {
    return console.log(err);
  }
};

export const loginUser = async (req, res, next) => {
    const {Email, Password} = req.body;
    try{
        if(!Email || !Password){
            return res.status(404).json({Message : "Please Enter the Credentials"})
        }

        const existingUser = await user.findOne({Email:Email});

        if(!existingUser){
            return res.status(404).json({Message : "User Does Not Exists"})
        }

        const existingUserPassword = bcrypt.compareSync(Password,existingUser.Password)

        if(!existingUserPassword){
            return res.status(400).json({Message : "Invalid Credentials"})
        }

        return res.status(200).json({id: existingUser._id,Message : "Login Successfull"})

    }
    catch(err){
        return console.log(err);
    }
};

