const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const express = require("express");
const { connectMongo } = require("./services/mongo");
const { iniciarMensajesAutomaticos } = require("./services/autoMessages.service");
const handleMessage = require("./handlers/message.handler");

// ==============================
// EXPRESS (Web Service)
// ==============================
const app = express();
const PORT = process.env.PORT || 3000;

// Health check simple (Render)
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Web service escuchando en puerto ${PORT}`);
});

// ==============================
// MONGODB
// ==============================
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI no está definida");
} else {
  connectMongo(process.env.MONGO_URI);
}

// ==============================
// DISCORD CLIENT
// ==============================
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const CANAL_ID = "1080233720847540317";

client.once("ready", () => {
  console.log(`🤖 Bot listo como ${client.user.tag}`);
  iniciarMensajesAutomaticos(client, CANAL_ID);
});

client.on("messageCreate", handleMessage);

// ==============================
// LOGIN DISCORD (DESPUÉS DE LEVANTAR WEB)
// ==============================
if (!process.env.DISCORD_TOKEN) {
  console.error("❌ DISCORD_TOKEN no está definido");
} else {
  client.login(process.env.DISCORD_TOKEN).catch((err) => {
    console.error("❌ Error al loguear el bot:", err);
  });
}
