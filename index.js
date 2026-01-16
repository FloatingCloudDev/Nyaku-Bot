const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const { AttachmentBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const CANAL_ID = "1080233720847540317";
const DOS_HORAS = 2 * 60 * 60 * 1000;

client.once("ready", async () => {
  console.log(`Bot listo como ${client.user.tag}`);

  const canal = await client.channels.fetch(CANAL_ID);

 // canal.send("馃挧 Tomen agua");

  setInterval(() => {
    canal.send("馃挧 Tomen agua");
  }, DOS_HORAS);
});


const SEIS_HORAS = 6 * 60 * 60 * 1000;

client.once("ready", async () => {
  console.log(`Bot listo como ${client.user.tag}`);

  const canal = await client.channels.fetch(CANAL_ID);

  canal.send("*se desequilibra mentalmente*");

  setInterval(() => {
    canal.send("*se desequilibra mentalmente*");
  }, SEIS_HORAS);
});

// 馃敼 1) Responder "Rawr" si alguien dice "Cami"
client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("rawr")) {
    message.channel.send("Rawr 馃");
  }
  
  if (message.content.toLowerCase().includes("kiti")) {
    message.channel.send("Detonar colombianita");
  }

  // 馃敼 2) Comando !Malabares
  if (message.content === "!Malabares") {
  const pelotas = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
  let seCaen = false;

  if (pelotas === 6) {
    seCaen = Math.random() < 0.30; // 30%
  } else if (pelotas === 7) {
    seCaen = Math.random() < 0.50; // 50%
  } else if (pelotas === 8) {
    seCaen = Math.random() < 0.70; // 70%
  }

  if (seCaen) {
    message.channel.send(`馃す Hice malabares con ${pelotas} pelotas y se me cayeron ??`);
  } else {
    message.channel.send(`馃す Hice malabares con ${pelotas} pelotas`);
  }
}

  if (message.content.toLowerCase().includes("detonar")) {
  const username = message.member.displayName;
  message.channel.send(`Detonar ${username}`);
}
 
  if (message.content.toLowerCase().includes("batate")) {
    message.channel.send(`https://tenor.com/view/gold-ship-batate-y-grabalo-gif-5677525794195841794`);
	}
	
if (message.content.toLowerCase().includes("pinned")) {
    message.channel.send(`https://tenor.com/view/sausage-fest-hot-dog-gif-14785205`);
	}
	
  if (message.content.toLowerCase().includes("agua")) {
    message.channel.send(`馃挧 Tomen agua`);
  }
  if (message.content.toLowerCase().includes("colorado yeta")) {
    message.channel.send(`Como que colorado yeta? Gordito`);
  }
  
  if (message.content.toLowerCase().includes("silver")) {
    message.channel.send(`Silver pete`);
  }
  if (message.content.toLowerCase().includes("chancho")) {
    message.channel.send(`Van a sortear el chanchooo?`);
  }
  if (message.content.toLowerCase().includes("vengo")) {
    message.channel.send(`Oh mi amor... Me vengoh`);
  }
  
  if (message.content.toLowerCase().includes("curious") || message.content.toLowerCase().includes("curius")) {
    message.channel.send(`:zzz: *se jijea mimido* :zzz:  `);
  }
  if (message.content.toLowerCase().includes("boca")) {
    message.channel.send(`HOY JUEGA UOOOOOOOOOOOOOOOOOCAAAAAAAAAAAA`);
  }
  if (message.content.toLowerCase().includes("kaisa")) {
    message.channel.send(`Sullivan dame a la ni?a`);
  }
  if (message.content.toLowerCase().includes("jotape")) {
    message.channel.send(`馃崋 Te parecen bien 47 cm?`);
  }
  
  if (message.content.toLowerCase() === '!dulcemagico') {
  const username = message.author.username.toLowerCase();
  let resultado;

if (
  username.includes('kiti') ||
  username.includes('lissie') ||
  username.includes('kittie')
) {
  // 99% jabon
  resultado = Math.random() < 0.99
  ? `馃Ъ Te toc贸 sabor **jab贸n**`
    : `馃崜 Te toc贸 sabor **frutilla**`;
} else {
  const bueno = Math.random() < 0.5; // 50 / 50

  if (bueno) {
    // Caso especial nootnoot9070
    if (username === 'nootnoot9070' && Math.random() < 0.02) {
      resultado = `馃崙 Te toc贸 sabor **kako**`;
    } else {
      resultado = `馃崜 Te toc贸 sabor **frutilla**`;
    }
  } else {
    resultado = `馃Ъ Te toc贸 sabor **jab贸n**`;
  }
}

  message.channel.send(resultado);
}

if (message.content === "!Yerba") {

  const mensajes = [
    "*se cae de la escalera*",
    "Ponetelo nene que hace frio *le da una bufanda*",
    "Cafecito en taza de porcelana herencia de la nona me siento una se帽ora de alta clase",
    "Me metio una parte de su cuerpo en la boca y me dijo shhhh quedate quieto papito. Oh travalinda volv茅 te hago la oficial",
    "La colita!? owo. *se menea*",
    "Soy mujer, hembra. Soy una PERRA",
    "Ese pitito lo conozco",
    "Sigan hablando y me voy a empezar a manosear",
    "Me gusta que me muerdan",
    "Cierren el chat. Adios Soquetes",
	"Amor es cuando tu pareja te pela la mandarina cuando no podes por la artritis",
	"Todo al rojo",
	"Tu vieja le va a pagar la manutencion a las criaturas",
	"Veni aca, bondiola lanusense",
	"Es un bueno para nada y un difamador de cuarta",
	"*Pega la nariz al sobaco de clear* Sniffffffffffff Sssssssssssssssnifffffffffff",
	"Estuve 30 minutos para que me entre completa",
	"Que estas intentando hacer zorra? Habil es mio",
	"Queres verme las garritas?",
	"Un dia voy a tomar la pastilla y todos ustedes van a desaparecer de mi mente"
  ];

  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];

  message.channel.send(
    `<:yerba:1438226204187693217> ${mensaje}`
  );
}

if (message.content.toLowerCase().startsWith("!despeinar")) {

    // Usuario mencionado
    const usuario = message.mentions.users.first();

    if (!usuario) {
      return message.reply("tenés que mencionar a alguien ??");
    }

    // Imagen
    const img = new AttachmentBuilder("./images/despeinar.png");

    message.channel.send({
      content: `${message.author} despeinó a ${usuario}`,
      files: [img]
    });
  }


 if (message.content.toLowerCase().includes("habil")) {

  const mensajes = [
    "Habiltiragoma",
    "Habiltraidor",
    "Habilproxeneta",
    "Habilitador",
    "Habilentregacola",
    "Habilgagueador",
    "Habilmeador",
    "Habilitado",
    "Habiltomadordeterrenos",
    "Habildeprimido",
	"Habillanusense",
	"Habiljijeador",
	"Habilmoderador",
	"Habilfollador",
	"Habilcolisionadordeadrones",
	"Habilabrazador",
	"Habildetonador",
	"habilconsejero"
  ];

  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];

  message.channel.send(
    `Gambling de personalidad, ganador: ${mensaje}`
  );
}

  if (message.content === 'no digo culiau') {
  const img = new AttachmentBuilder('./images/cordobesaestafadora.png');

  message.channel.send({
    content: 'Cordo trucha',
    files: [img]
  });
}

  if (message.content === 'colombianita') {
  const img = new AttachmentBuilder('./images/colombianita.png');

  message.channel.send({
    content: 'Salen unos verduskis?',
    files: [img]
  });
}
	
  if (message.content === 'happy') {
  const img = new AttachmentBuilder('./images/happy.png');

  message.channel.send({
    content: 'Tengo 10k contactos en linkelin',
    files: [img]
  });
}
  
  if (message.content.toLowerCase().includes("mondongo")) {
  const img = new AttachmentBuilder('./images/mondongo.png');

  message.channel.send({
    content: 'Mondongo',
    files: [img]
  });
}

	if (message.content.toLowerCase().includes("kjj")) {
  const img = new AttachmentBuilder('./images/kjjjj.png');

  message.channel.send({
    content: 'kjjjjjjjj',
    files: [img]
  });
}
	if (message.content.toLowerCase().includes("monogamia")) {
  const img = new AttachmentBuilder('./images/monogamia.png');

  message.channel.send({
    content: 'monogamia o bala',
    files: [img]
  });
}
	if (message.content.toLowerCase().includes("pedilo")) {
  const img = new AttachmentBuilder('./images/pedilo.png');

  message.channel.send({
    content: 'Pedilo',
    files: [img]
  });
}

	if (message.content.toLowerCase().includes("turbina")) {
  const img = new AttachmentBuilder('./images/turbina.png');

  message.channel.send({
    content: '',
    files: [img]
  });
}
	
	if (message.content.toLowerCase().includes("andre")) {
  const img = new AttachmentBuilder('./images/andre.png');

  message.channel.send({
    content: 'Kiti:',
    files: [img]
  });
}
	if (message.content.toLowerCase().includes("mojito")) {
  const img = new AttachmentBuilder('./images/mojito.png');

  message.channel.send({
    content: "Por fin atrapamo al trago de grado especial conocida como Mojito. Ya te tenemo', buena perra",
    files: [img]
  });
}

	if (message.content.toLowerCase().includes("lanus")) {
  const img = new AttachmentBuilder('./images/lanus.png');

  message.channel.send({
    content: 'AGUANTE LANUS VIEJA:',
    files: [img]
  });
}

	
	if (message.content.toLowerCase().includes("julian")) {

  // Random entre 0 y 8
  const numero = Math.floor(Math.random() * 9);
  
  const lista = [
  "Juira negro, aca la ara?a manda",
  "*snifea sangre marron*",
  "Pero? Dijiste pero?",
  "*traicionado y encerrado en la habitacion marron por 1000 a?os",
  "Te falta odio NEGRO",
  "*Se enoja nazimente*",
  "Que paso papito?",
  "Ni siquiera esta es mi forma final",
  "No soy racista, tengo un negro"
];

  // Ruta de la imagen
  const img = new AttachmentBuilder(`./images/Julian/${numero}.png`);

  message.channel.send({
    content: lista[numero],
    files: [img]
  });
}


   if (message.content.toLowerCase().includes("cordo")) {
	message.channel.send(`Cordo cordo cordo \OwO/`);   
    message.channel.send(`https://tenor.com/view/oguri-cap-uma-musume-umamusume-cinderella-gray-jumping-gif-16835630937186156678`);
	}

  if (message.content.toLowerCase().includes("kentucky")) {
    message.channel.send(`馃崟 Detonar Kentucky de Av. Santa Fe`);
  }
  
  if (message.content.toLowerCase().includes("oreo")) {
    message.channel.send(`*centrifugo oreo*`);
  }
  
  if (message.content.toLowerCase().includes("toki malo")) {
    message.channel.send(`<:go_away:1438230915720675558> <:go_away:1438230915720675558> <:go_away:1438230915720675558> <:go_away:1438230915720675558>`);
  }
     
	if (message.content.toLowerCase().includes("https://tenor.com/view/kigurumi-animegao-kigurumi-animegao-kigu-kig-gif-15535194444066053562")) {
    message.channel.send(`*aplaude fuerte*`);
  }
  if (message.content.toLowerCase().includes("nyaku")) {
    message.channel.send(`Nyaaaaaaaaaa`);
  }
if (message.content.toLowerCase().includes("tia")) {
  message.channel.send(`tia tubita tia tubita <:cute:1438715026398515370>`);
}

if (message.content.toLowerCase().includes("ysa")) {
  message.channel.send(`papi mod papi mod <:cute:1438715026398515370>`);
}

if (message.content.toLowerCase().includes("tkm")) {
  message.channel.send(`teque?o mucho <:cute:1438715026398515370>`);
}

if (message.content.toLowerCase().includes("shizus")) {
  message.channel.send(
    `Shizus? El proximo presidente de la republica Argentina? Traeme la urna <:cute:1438715026398515370>`
  );
}

});

client.login(process.env.TOKEN);


//pumples kiti 5/12, gen 27/12, toki 16/08, silvio 18/11, habiltiragoma 21/10