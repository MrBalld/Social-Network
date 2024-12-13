import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Social_DB');

export default mongoose.connection;