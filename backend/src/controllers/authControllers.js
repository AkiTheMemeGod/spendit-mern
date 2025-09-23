import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authmiddleware from '../midddleware/authmiddleware.js';


export async function register_User(req, res){
    try {
        const {username, email, password} = req.body
        
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ msg: "User already exists" });


        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({username, email, passwordHash})
        await newUser.save()
        res.status(201).json({"message" : "User Registered", User : newUser})
    } catch (error) {
        console.error("Error Registering User", error);
        res.status(500).json({"message" : "Server error"});
    } 
}

export async function login_User(req, res){
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    

    res.json({ token });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
}
