const bcrypt = require("bcrypt");
const User = require("../Models/UserModel");

const hashpass = async (pass) => {
  return bcrypt.hash(pass, 10);
};

module.exports.signup = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  if (!email || !password) {
    res.status(404).send("Data not found");
    return; 
  }

  try {
    const hashPass = await hashpass(password);
    await new User({
      email: email,
      password: hashPass,
    }).save();
    res.status(200).send({msg:"User created successfully"});
    return; 
  } catch (error) {
    res.status(503).send(error.message || "Something went wrong");
    return;
  }
};

module.exports.login = async (req, res) => {
  const { email, pass } = req.body;
  

  if (!email || !pass) {
    res.status(404).send("Data not found");
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send("User not found");
      return; 
    }

    const isValid = await bcrypt.compare(pass,user.password);
 
    if (!isValid) {
      res.status(401).send("Invalid Password");
      return; 
    }

    res.status(200).send("Login Successfully");
    return; 
  } catch (error) {
    res.status(503).send(error.message || "Something went wrong");
    return; 
  }
};
