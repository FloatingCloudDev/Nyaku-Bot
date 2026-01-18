const { AttachmentBuilder } = require("discord.js");
const {
  sumarAura,
  obtenerAura,
  aplicarExpansion
} = require('../services/aura.service');

const activityMap = new Map();
const textResponses = require('../responses/textResponses');
const imageResponses = require('../responses/imageResponses');
const comandosBases = require('../responses/comandosbase');

module.exports = async function handleMessage(message) {
  if (message.author.bot) return;

  const userId = message.author.id;
  const username = message.author.username.toLowerCase();
  const content = message.content.toLowerCase().trim();

  /* =====================
     COMANDOS DE AURA
  ====================== */

  if (content === '!farmearaura') {
    const total = await sumarAura(userId, 50);
    return message.reply(
      `✨ Farmiaste aura (+50)\n🔥 Aura total: **${total}**`
    );
  }

  if (content === '!aura') {
    const aura = await obtenerAura(userId);
    return message.reply(`🌟 Tu aura actual es **${aura}**`);
  }

  if (
    content === '!expansiondeldominio' &&
    username.includes('floatingcloud')
  ) {
    const auraFinal = await aplicarExpansion(userId);

    await message.channel.send(
`✨ Toki nunca aprendió la técnica de farmear aura invertida…
🕓 Durante **4 minutos y 11 segundos**, **Toki es prácticamente inmortal**.
🔮 Aura actual: **${auraFinal}**`
    );

    return message.channel.send(
      'https://tenor.com/view/hakari-domain-expansion-domain-expansion-anime-gif-11188887952426718576'
    );
  }


  const channelId = message.channel.id;
  const now = Date.now();

  if (!activityMap.has(channelId)) {
    activityMap.set(channelId, {
      users: new Set(),
      last: now,
      triggered: false
    });
  }

  const data = activityMap.get(channelId);
  data.users.add(message.author.id);

  if (now - data.last < 10_000) {
    if (data.users.size >= 5 && !data.triggered) {
    data.triggered = true;
    setTimeout(() => activityMap.delete(channelId), 30_000);
    const img = new AttachmentBuilder("./images/nyakuobserva.png");
    return message.channel.send({
    content: " ",
    files: [img],
    });
      
    }
  } else {
    activityMap.set(channelId, {
      users: new Set([message.author.id]),
      last: now,
      triggered: false
    });}




  /* =====================
     RESPUESTAS AUTOMÁTICAS
  ====================== */

  await textResponses(message);
  await imageResponses(message);
  await comandosBases(message);
};
