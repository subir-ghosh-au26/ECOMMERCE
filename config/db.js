const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

    } catch (err) {
        console.error(err);
    }
}


module.exports = connectDB;