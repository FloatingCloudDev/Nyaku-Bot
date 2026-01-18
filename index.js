// ==============================
// DEPENDENCIAS
// ==============================
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const express = require("express");
const { connectMongo } = require("./services/mongo");
const { iniciarMensajesAutomaticos } = require("./services/autoMessages.service");
const handleMessage = require("./handlers/message.handler");

// ==============================
// EXPRESS (Web Service - Render)
// ==============================
const app = express();
const PORT = process.env.PORT || 3000;

// Health check
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🌐 Web service escuchando en puerto ${PORT}`);
});

// ==============================
// ENV CHECKS
// ==============================
console.log("ENV CHECK:");
console.log(" - DISCORD_TOKEN existe:", !!process.env.DISCORD_TOKEN);
console.log(" - DISCORD_TOKEN length:", process.env.DISCORD_TOKEN?.length);
console.log(" - MONGO_URI existe:", !!process.env.MONGO_URI);

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

// Logs de debug (MUY útiles en Render)
client.on("debug", console.log);
client.on("error", console.error);
client.on("shardError", console.error);

// ==============================
// DISCORD EVENTS
// ==============================
const CANAL_ID = "1080233720847540317";

client.on("ready", () => {
  console.log(`🤖 Bot listo como ${client.user.tag}`);
  iniciarMensajesAutomaticos(client, CANAL_ID);
});

client.on("messageCreate", handleMessage);

// ==============================
// LOGIN DISCORD
// ==============================
if (!process.env.DISCORD_TOKEN) {
  console.error("❌ DISCORD_TOKEN no está definido");
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  console.error("❌ Error al loguear el bot:", err);
});
