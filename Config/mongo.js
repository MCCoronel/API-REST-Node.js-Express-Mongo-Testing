const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI);
        console.log('Database online');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect