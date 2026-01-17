const Aura = require('../models/Aura');

async function sumarAura(userId, cantidad) {
  const userAura = await Aura.findOneAndUpdate(
    { userId },
    { $inc: { aura: cantidad } },
    { new: true, upsert: true }
  );

  return userAura.aura;
}

async function obtenerAura(userId) {
  const data = await Aura.findOne({ userId });
  return data?.aura ?? 0;
}

async function aplicarExpansion(userId) {
  let userAura = await Aura.findOne({ userId });

  if (!userAura) {
    userAura = await Aura.create({ userId });
  }

  userAura.aura *= 4;
  await userAura.save();

  return userAura.aura;
}

module.exports = {
  sumarAura,
  obtenerAura,
  aplicarExpansion
};
