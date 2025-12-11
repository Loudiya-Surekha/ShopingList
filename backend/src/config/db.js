import mongoose from 'mongoose';

export const connectDB = async (mongoUri) => {
    try {
        await mongoose.connect(mongoUri); // no options needed
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};
