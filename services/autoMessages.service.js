const { AttachmentBuilder } = require("discord.js");

async function iniciarMensajesAutomaticos(client, canalId) {
  const canal = await client.channels.fetch(canalId);

  const DOS_HORAS = 2 * 60 * 60 * 1000;
  const OCHO_HORAS = 8 * 60 * 60 * 1000;

  setInterval(() => {
    canal.send("💧 Tomen agua");
  }, DOS_HORAS);


  setInterval(() => {
    canal.send("*Se tira agua encima y se bugea*");
  }, OCHO_HORAS);

  
}

module.exports = { iniciarMensajesAutomaticos };
