const mongoose = require('mongoose');

const auraSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  aura: {
    type: Number,
    default: 0
  },
  expansionCooldownUntil: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Aura', auraSchema);
