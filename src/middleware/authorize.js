const jwt = require("jsonwebtoken");
require("dotenv").config();
const {User} = require('../models')

const verifyToken = async(req, res, next) =>{
  const {authorization} = req.headers

  if (!authorization) {
    return res.status(403).json({
      message: "Authorization denied."
    })
  }
  
  try {
    const token = authorization.split(' ')[1]
    const verify = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

const adminOnly = async (req, res, next) =>{
  const id = req.user.id
  try {
    const user = await User.findOne({
      where: {
          id: id
      }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});

    if(user.role !== "admin") {
      return res.status(403).json({msg: "Akses terlarang"})
    };
    next();
  } catch (err) {
    res.status(401).json({ 
      msg: err.message,
      data: user.role
    });
  }
  
}

module.exports = {
  verifyToken,
  adminOnly
}