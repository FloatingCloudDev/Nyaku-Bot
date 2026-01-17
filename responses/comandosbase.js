const { AttachmentBuilder } = require("discord.js");

module.exports = async function comandosBase(message) {
    const content = message.content.toLowerCase();
    const username = message.member.displayName;

    if(content === "!Malabares") {{
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
    return message.channel.send(`🤹 Hice malabares con ${pelotas} pelotas y se me cayeron`);
    } else {
    return message.channel.send(`🤹 Hice malabares con ${pelotas} pelotas`);
    }
    }
    }

    if (content === '!Dulcemagico') {
    let resultado;

    if (username.includes('kiti') || username.includes('lissie') || username.includes('kittie')) {
    // 99% jabon
    resultado = Math.random() < 0.99
    ? `🧼 Te tocó sabor **jabón**`
    : `🍓 Te tocó sabor **frutilla**`;
    } else {
    const bueno = Math.random() < 0.5; // 50 / 50

    if (bueno) {
    if (username === 'nootnoot9070' && Math.random() < 0.02) {resultado = `🍑 Te tocó sabor **kako**`;} else { resultado = `🍓 Te tocó sabor **frutilla**`;}} else {resultado = `🧼 Te tocó sabor **jabón**`;
    }
    }

    return message.channel.send(resultado);
    }
    
    if (content === "!Yerba") {
    const mensajes = [
    "*se cae de la escalera*",
    "Ponetelo nene que hace frio *le da una bufanda*",
    "Cafecito en taza de porcelana herencia de la nona me siento una se?ora de alta clase",
    "Me metio una parte de su cuerpo en la boca y me dijo shhhh quedate quieto papito. Oh travalinda volvé te hago la oficial",
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
    "Un dia voy a tomar la pastilla y todos ustedes van a desaparecer de mi mente",
    "Hay que tomarse la pastilla o ya es la hora de tomarse la pastilla"
    ];
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    return message.channel.send(`<:yerba:1438226204187693217> ${mensaje}`);
    }

    if (content.startsWith("!Despeinar")) {
    const usuario = message.mentions.users.first();
    if (!usuario) {return message.reply("tenés que mencionar a alguien gato, a quien vas a despeinar? al aire?");}
    const img = new AttachmentBuilder("./images/despeinar.png");
    return message.channel.send({content: `${message.author} despeinó a ${usuario}`, files: [img]});
    }
    
    if (content === "!Mahito") {
    const mensajes = [
    "Por fin atrapamo' a la maldición de grado especial conocida como Mahito Ya te tenemo', buena perra",

    "Ha, ha, ha! Y u'tede' creen que yo le' tengo miedo a u'tede'? U'tede' me pueden exolcisar Pero eso no va a devolver a to'a la gente con la que yo acabe Ha, ha! Maldito' hechizero' e'tupidos",

    "Oye ahora, y quien te ha dicho a ti que te vamo' a exolcizal? A ti te lo vamo' a mete' primero Ay, si, te vamo' a exolcizal A base de huevazo' por el chiquindolo Si o no, Itadori?",

    "Oh, pero claro, Megumi Así mismo es A el lo que se lo vamo' a mete' durísimo Y el que parece una mujer que e lo que me gusta",

    "Déjame llamo a Todo TODO, MY BROTHER! 'Dime a ve', Yuji' Tu no sabe' con quien yo e'toy aquí, loco Dime con quien tu 'tas, brother? 'toi aquí con Mahito' Mahito? Y cual es ese, brother? Mahito, loco, el que parece una mujer Ay, si, yo toi loco por enterrarselo a ese (Ay, si, ay, si) Hey, brothel, trai lo' dedo' maldito' de Sukuna que 'tan allá, que se lo' vamo' a mete' todito' por el culo XDFXFFFFFF (Ay, si, brother, si, vamos, que rico)",

    "Wait, wait, wait, e'perense C-como así?",

    "Que lo que como así? ni como así? Te vamo' a expandi' el dominio que tu tiene ahí atra' Tu sabe' de que dominio e' que nosotro' hablamo'? Del culo tuyo! Ay, si, te lo vamo' a expandi' Y prepárate que vo' a invoca' a Mahoraga Ay, Mahoraga si lo tiene grande Y cuando Mahoraga te agarre Ay, jijiji!",

    "Wait, no, pol favo' Kenjaku, Kenjaku, ayúdame!",

    "Oye ahora di' qué que te ayude Yo lo que me vo' a pajea' viendo como te lo meten Ay, si",
    ];
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    return message.channel.send(`${mensaje}`);
    }
    
    if (content === ("!Mahoraga")) {
    const mahoraga = new AttachmentBuilder('./images/cordobesaestafadora.png');
    const mahocuriou = new AttachmentBuilder('./images/cordobesaestafadora.png');    
    if (username.includes('nootnoot9070') ) {return message.channel.send({content: `*se adapta legalmente`, files: [mahocuriou]});}
    else {return message.channel.send({content: `*se adapta`, files: [mahoraga]});}
    }

};