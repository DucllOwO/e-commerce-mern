const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    address: req.body.address
  });

  try {
    console.log('register running')
    const savedUser = await newUser.save();
    const savedUserWithoutPassword = structuredClone(savedUser);
    return res.status(201).json(savedUserWithoutPassword);
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.user_name,
    });

    if (!user)
      return res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    if (originalPassword != inputPassword)
     return res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "7d" }
    );

    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  register,
  login,
};
