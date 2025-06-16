import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://psycho:1234@cluster0.ywpdctl.mongodb.net/mydatabase?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB at:', MONGODB_URI);
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB подключен');
    } catch (error) {
        console.error('Ошибка подключения к MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;