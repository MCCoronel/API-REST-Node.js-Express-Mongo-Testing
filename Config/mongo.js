const mongoose = require('mongoose');
const NODE_ENV = process.env.NODE_ENV;
const DB_URI_TEST = process.env.DB_URI_TEST;

const dbConnect = async () => {
  try {
    const DB_URI = NODE_ENV === 'test' ? DB_URI_TEST : process.env.DB_URI;
    await mongoose.connect(DB_URI);
    console.log('Database online');
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;



