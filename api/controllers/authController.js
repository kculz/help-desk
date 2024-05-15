const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require('../models');
const {JWT_SECRET} = require("../config");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

          // Find the user by username
        const user = await User.findOne({ where: { username } });
        if (!user) {
             return res.status(401).json({ msg: 'Invalid username or password' });
        }
      
        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
             return res.status(401).json({ msg: 'Invalid username or password' });
        }
        // Create a JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '3d' });
      
        return res.status(200).json({ msg: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ err: 'Error logging in' });
    }
    
}

const register = async (req, res) => {
  try {
    const { fullname, email, username, password } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ msg: 'Username already exists' });
    }

    // check  if email already exists
    const emailExist = await User.findOne({where: {email}});
    if(emailExist){
      return res.status(409).json({msg: 'Email already registered. Please try a different email account.'});
    }
    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create the user
    const user = await User.create({ fullname, email, username, password: hashedPassword });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '3d' })

    return res.status(201).json({ msg: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ err: 'Error registering user' });
  }
}

module.exports.AUTH = {
    login, register
}