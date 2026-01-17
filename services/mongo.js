const mongoose = require('mongoose');

async function connectMongo(uri) {
  try {
    await mongoose.connect(uri);
    console.log('🟢 MongoDB conectado');
  } catch (err) {
    console.error('🔴 Error MongoDB:', err);
  }
}

module.exports = { connectMongo };
