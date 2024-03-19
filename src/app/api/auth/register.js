// pages/api/auth/register.js

import { hash } from 'bcryptjs'; // For hashing passwords
import dbConnect from '../../../lib/dbConnect'; // Assuming you have a database connection module
import User from '../../../models/User'; // Assuming you have a User model

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    await dbConnect();

    const { email, password, name, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password before saving to the database
        const hashedPassword = await hash(password, 10);

        // Create the user in the database
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
