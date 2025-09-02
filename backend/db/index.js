const mongoose = require('mongoose')

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDb