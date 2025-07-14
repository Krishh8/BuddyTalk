const mongoose = require('mongoose');
require('dotenv').config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected.");
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}