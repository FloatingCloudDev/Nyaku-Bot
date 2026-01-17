const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const express = require("express");
const { connectMongo } = require('./services/mongo');
const { iniciarMensajesAutomaticos } = require('./services/autoMessages.service');
const handleMessage = require('./handlers/message.handler');

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Bot vivo ??"));
app.listen(PORT, () => {
  console.log(`Web service escuchando en puerto ${PORT}`);
});

connectMongo(process.env.MONGO_URI);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const CANAL_ID = "1080233720847540317";

client.once("ready", async () => {
  console.log(`Bot listo como ${client.user.tag}`);
  iniciarMensajesAutomaticos(client, CANAL_ID);
});

client.on("messageCreate", handleMessage);

client.login(process.env.TOKEN);
