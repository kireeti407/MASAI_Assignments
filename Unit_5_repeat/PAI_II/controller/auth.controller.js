const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const dotenv=require('dotenv')
dotenv.config()

var jwt = require('jsonwebtoken');


const saltRounds = 10;

const singup = async (req, res) => {
  try {
    let data = req.body;
    bcrypt.hash(data.password, saltRounds,async function (err, hash) {
      data.password=hash
      console.log(data)
      let d = await User.create(data);
      res.status(200).send({ msg: "please login now" });
    });
  } catch (err) {
    res.status(400).send({ message: "somthing went wrong" });
  }
};

const login = async (req, res) => {
  try {
    let data = req.body;
    let user = await User.findOne({ email: data.email });
    if (!user) {
      return res.status(400).send({ msg: "user not found" });
    }
    bcrypt.compare(data.password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({ id:user._id,role:user.role}, process.env.secreat_key,{expiresIn:"7d"});
            return res.status(200).send({token})
        }
        res.status(200).send({msg:"password is incorrect"})
    });
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: "somthing went wrong" });
  }
};

module.exports={
    singup,
    login
}
