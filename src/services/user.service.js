import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (userData) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        
        const newUser = new User({
            username: userData.username,
            email: userData.email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        return {
            success: true,
            data: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email
            }
        };
    } catch (error) {
        console.error("Service error in registerUser:", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const user = await User.findOne({ username: credentials.username }).select('+password');
        
        if (!user) {
            return {
                success: false,
                message: 'User not found'
            };
        }

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        
        if (!isMatch) {
            return {
                success: false,
                message: 'Invalid credentials'
            };
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        
        return {
            success: true,
            data: {
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        };
    } catch (error) {
        console.error("Service error in loginUser:", error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        return {
            success: true,
            data: user
        };
    } catch (error) {
        console.error("Service error in getUserById:", error);
        throw error;
    }
};
