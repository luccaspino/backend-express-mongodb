import User from '../models/User.js'; 
import * as userService from '../services/user.service.js'; 

const register = async (req, res) => {
    try {
        if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).json({ message: "Username, email and password are required" });
        }

        const result = await userService.registerUser(req.body);
        
        if (!result.success) {
            return res.status(400).json({ message: result.message });
        }

        return res.status(201).json({
            message: "User registered successfully",
            user: result.data
        });
    } catch (error) {
        console.error("Controller error in register:", error);
        
        if (error.code === 11000) {
            return res.status(400).json({ message: "Username or email already exists" });
        }
        
        return res.status(500).json({ message: "Error registering user" });
    }
};

const login = async (req, res) => {
    try {
        if (!req.body || !req.body.username || !req.body.password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const result = await userService.loginUser(req.body);
        
        if (!result.success) {
            return res.status(400).json({ message: result.message });
        }

        return res.status(200).json({
            message: "Login successful",
            token: result.data.token,
            user: result.data.user
        });
    } catch (error) {
        console.error("Controller error in login:", error);
        return res.status(500).json({ message: "Error logging in user" });
    }
};

const getProfile = async (req, res) => {
    try {
        const result = await userService.getUserById(req.userId);
        
        if (!result.success) {
            return res.status(404).json({ message: result.message });
        }

        return res.status(200).json({
            user: result.data
        });
    } catch (error) {
        console.error("Controller error in getProfile:", error);
        return res.status(500).json({ message: "Error getting user profile" });
    }
};

export default { register, login, getProfile };