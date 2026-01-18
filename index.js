// ==============================
// DEPENDENCIAS
// ==============================
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const express = require("express");
const https = require("https");
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
// FUNCION PARA VALIDAR IP / TOKEN
// ==============================
function validarConexionDiscord(token) {
  return new Promise((resolve) => {
    const options = {
      hostname: "discord.com",
      path: "/api/v10/gateway",
      method: "GET",
      headers: {
        Authorization: `Bot ${token}`,
      },
    };

    const req = https.request(options, (res) => {
      console.log("Status Code test Discord:", res.statusCode);

      if (res.statusCode === 200) {
        console.log("✅ Conexión a Discord OK: IP y token parecen válidos");
        resolve("OK");
      } else if (res.statusCode === 401) {
        console.error("❌ Token inválido o no autorizado");
        resolve("TOKEN_INVALIDO");
      } else if (res.statusCode === 429) {
        console.warn("⚠️ Rate limited: la IP podría estar bloqueada temporalmente");
        resolve("RATE_LIMIT");
      } else {
        console.error("❌ Otro error al conectar con Discord:", res.statusCode);
        resolve("ERROR_DESCONOCIDO");
      }
    });

    req.on("error", (error) => {
      console.error("❌ Error de conexión (posible bloqueo de IP):", error.message);
      resolve("IP_BLOQUEADA");
    });

    req.end();
  });
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

// Logs de debug
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
// LOGIN DISCORD CON VALIDACION
// ==============================
(async () => {
  if (!process.env.DISCORD_TOKEN) {
    console.error("❌ DISCORD_TOKEN no está definido");
    process.exit(1);
  }

  const estado = await validarConexionDiscord(process.env.DISCORD_TOKEN);

  if (estado === "OK") {
    client.login(process.env.DISCORD_TOKEN).catch((err) => {
      console.error("❌ Error al loguear el bot:", err);
    });
  } else {
    console.error("❌ No se puede loguear el bot debido a problemas detectados:", estado);
    process.exit(1);
  }
})();
