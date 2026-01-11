const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const CANAL_ID = "1080233720847540317";
const SEIS_HORAS = 6 * 60 * 60 * 1000;

client.once("ready", async () => {
  console.log(`Bot listo como ${client.user.tag}`);

  const canal = await client.channels.fetch(CANAL_ID);

  canal.send("💧 Tomen agua");

  setInterval(() => {
    canal.send("💧 Tomen agua");
  }, SEIS_HORAS);
});

// 🔹 1) Responder "Rawr" si alguien dice "Cami"
client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("rawr")) {
    message.channel.send("Rawr 🦖");
  }

  // 🔹 2) Comando !Malabares
  if (message.content === "!Malabares") {
    const pelotas = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    message.channel.send(`🤹 Hice malabares con ${pelotas} pelotas`);
  }
if (message.content.toLowerCase().includes("detonar")) {
  const username = message.member.displayName;
  message.channel.send(`Detonar ${username}`);
}
  
    if (message.content.toLowerCase().includes("bata")) {
    const pelotas = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    message.channel.send(`🤹 batate y grabalo`);
	}
	
	if (message.content.toLowerCase().includes("agua")) {
    message.channel.send(`💧 Tomen agua`);
  }
  if (message.content.toLowerCase().includes("colorado yeta")) {
    message.channel.send(`Como que colorado yeta? Gordito`);
  }
  
  if (message.content.toLowerCase().includes("silver")) {
    message.channel.send(`Silver pete`);
  }
  if (message.content.toLowerCase().includes("boca")) {
    message.channel.send(`HOY JUEGA UOOOOOOOOOOOOOOOOOCAAAAAAAAAAAA`);
  }
  if (message.content.toLowerCase().includes("kaisa")) {
    message.channel.send(`Sullivan dame a la niña`);
  }
  
  if (message.content.toLowerCase() === '!dulcemagico') {
  const username = message.author.username.toLowerCase();
  let resultado;

  if (
  username.includes('kiti') ||
  username.includes('lissie') ||
  username.includes('kittie')
) {
    // 99% jabón
    resultado = Math.random() < 0.99
      ? '🧼 Te tocó sabor **jabón**'
      : '🍬 Te tocó sabor **frutilla**';
  } else {
    // 50 / 50
    resultado = Math.random() < 0.5
      ? '🍬 Te tocó sabor **frutilla**'
      : '🤢 Te tocó sabor **jabon**';
  }

  message.channel.send(resultado);
}

  if (message.content.toLowerCase().includes("kentucky")) {
    message.channel.send(`🍕 Detonar Kentucky de Av. Santa Fe`);
  }
  
  if (message.content.toLowerCase().includes("tia")) {
    message.channel.send(`tia tubita tia tubita <:cute:1438715026398515370>
`);
  }
});

client.login(process.env.TOKEN);
