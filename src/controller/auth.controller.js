const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwt.generator");
const { User } = require('../models');

const registerHandler = async(req, res) => {
  const { 
    nama, email, userName, role, password,
    nomorWa, umur, gender, foto
   } = req.body;

  try {
    const user = await User.findAll({ 
      where: {
        email: email
      },
    })

    if (user.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    
    let newUser = await User.create({ 
      email: email, userName: userName, role: role, password: bcryptPassword,
      nama: nama, nomorWa: nomorWa, umur: umur, gender: gender, foto: foto
    })

    return res.status(201).json({
      status: 'created',
      data:{
        newUser
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json(
      err.message
    );
  }
}

const loginHandler = async(req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({
      where: {email: email},
    })

    if (!user) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.id);
    return res.status(200).json({ 
        message: 'success',
        data: {user},
        token: jwtToken 
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
}

const verifyHandler = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
}

module.exports = {
    registerHandler,
    loginHandler,
    verifyHandler,
}