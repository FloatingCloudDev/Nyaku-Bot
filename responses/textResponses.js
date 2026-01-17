module.exports = async function textResponses(message) {
  const content = message.content.toLowerCase();
  const username = message.member.displayName;

    if (content.includes("rawr")) {
    return message.channel.send("Rawr 🦖");
    }
    if (content.includes("kiti")) {
    return message.channel.send("Detonar colombianita");
    }
    if (content.includes("agua")) {
    return message.channel.send("💧 Tomen agua");
    }
    if (content.includes("silver")) {
    return message.channel.send("Silver pete");
    }
    if (content.includes("nyaku")) {
    return message.channel.send("Nyaaaaaaaaaa");
    }
    if (content.includes("detonar")) {  
    return message.channel.send(`Detonar ${username}`);
    }
    if (content.includes("colorado yeta")) {
    return message.channel.send(`Como que colorado yeta? Gordito`);
    }
    if (content.includes("chancho")) {
    return message.channel.send(`Van a sortear el chanchooo?`);
    }
    if (content.includes("vengo")) {
    return message.channel.send(`Oh mi amor... Me vengoh`);
    }
    if (content.includes("curious") || content.includes("curius")) {
    return message.channel.send(`:zzz: *se jijea mimido* :zzz:  `);
    }
    if (content.includes("boca")) {
    return message.channel.send(`HOY JUEGA UOOOOOOOOOOOOOOOOOCAAAAAAAAAAAA`);
    }
    if (content.includes("kaisa")) {
    return message.channel.send(`Sullivan dame a la niña`);
    }
    if (content.includes("jotape")) {
    return message.channel.send(`🍆 Te parecen bien 47 cm?`);
    }
    if (content.includes("batate")) {
    return message.channel.send(`https://tenor.com/view/gold-ship-batate-y-grabalo-gif-5677525794195841794`);
    }
    if (content.includes("pinned")) {
    return message.channel.send(`https://tenor.com/view/sausage-fest-hot-dog-gif-14785205`);
    }
    if (content.includes("https://tenor.com/view/kigurumi-animegao-kigurumi-animegao-kigu-kig-gif-15535194444066053562")) {
    return message.channel.send(`*aplaude fuerte*`);
    }
    if (content.includes("kentucky")) {
    return message.channel.send(`🍕 Detonar Kentucky de Av. Santa Fe`);
    }
    if (content.includes("oreo")) {
    return message.channel.send(`*centrifugo oreo*`);
    }
    if (content.includes("toki malo")) {
    return message.channel.send(`<:go_away:1438230915720675558> <:go_away:1438230915720675558> <:go_away:1438230915720675558> <:go_away:1438230915720675558>`);
    }    
    if (content.includes("nyaku")) {
    return message.channel.send(`Nyaaaaaaaaaa`);
    }
    if (content.includes("tia")) {
    return message.channel.send(`tia tubita tia tubita <:cute:1438715026398515370>`);
    }
    if (content.includes("ysa")) {
    return message.channel.send(`papi mod papi mod <:cute:1438715026398515370>`);
    }
    if (content.includes("tkm")) {
    return message.channel.send(`tequeño mucho <:cute:1438715026398515370>`);
    }
    if (content.includes("shizus")) {
    return message.channel.send(`Shizus? El proximo presidente de la republica Argentina? Traeme la urna <:cute:1438715026398515370>`);
    } 
    if (content.includes("pena")||content.includes("licenciado")) {
    return message.channel.send(`Licenciado PETE`);
    }

    if (content.includes("habil")) {
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
    return message.channel.send(`Gambling de personalidad, ganador: ${mensaje}`);
    }

    if (content.includes("cordo")) {
    await message.channel.send("Cordo cordo cordo \\OwO/");
    await message.channel.send(
      "https://tenor.com/view/oguri-cap-uma-musume-umamusume-cinderella-gray-jumping-gif-16835630937186156678"
    );
    return;
    }

    if (content.includes("rolo")) {
    await message.channel.send("Mientras tanto rolo:");
    await message.channel.send(
      "https://tenor.com/view/icarly-gibby-icarly-minecraft-tnt-minecraft-memes-gif-25207661"
    );
    return;
    }
};