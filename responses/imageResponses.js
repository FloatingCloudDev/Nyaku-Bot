const { AttachmentBuilder } = require("discord.js");

module.exports = async function imageResponses(message) {
  const content = message.content.toLowerCase();

    if (content === "colombianita") {
    const img = new AttachmentBuilder("./images/colombianita.png");
    return message.channel.send({
    content: "Salen unos verduskis?",
    files: [img],
    });
    }

    if (content === "!veladora") {
    const img = new AttachmentBuilder("./images/veladora.png");
    return message.channel.send({
    content: "Veladora para atraer el coito",
    files: [img],
    });
    }


    if (content === "!prudencio") {
    const img = new AttachmentBuilder("./images/Prudencio.png");
    return message.channel.send({
    content: "tite",
    files: [img],
    });
    }

    if (content ===  "!Defensa") {
    const img = new AttachmentBuilder('./images/defensa.png');

    return message.channel.send({
    content: '*se pone esponjoso*',
    files: [img]
    });
    }

    if (content.includes("julian")) {
    const numero = Math.floor(Math.random() * 9);
    const img = new AttachmentBuilder(`./images/Julian/${numero}.png`);

    return message.channel.send({
    content: "Ni siquiera esta es mi forma final",
    files: [img],
    });
    }

    if (content.includes("no digo culiau")) {
    const img = new AttachmentBuilder('./images/cordobesaestafadora.png');

    return message.channel.send({
    content: 'Cordo trucha',
    files: [img]
    });
    }

    if (content.includes("silver") && content.includes("prudencio")) {
    const img = new AttachmentBuilder('./images/prudencioysilver.png');

    return message.channel.send({
    content: 'No te pedi tu ayuda',
    files: [img]
    });
    }

    if (content.includes("jacaranda") ) {
    const img = new AttachmentBuilder('./images/jacaranda.png');

    return message.channel.send({
    content: 'OMG JACARANDA HI \ OwO / ',
    files: [img]
    });
    }    

    if (content.includes('happy')) {
    const img = new AttachmentBuilder('./images/happy.png');

    return message.channel.send({
    content: 'Tengo 10k contactos en linkelin',
    files: [img]
    });
    }

    if (content.includes("mondongo")) {
    const img = new AttachmentBuilder('./images/mondongo.png');

    return message.channel.send({
    content: 'Mondongo',
    files: [img]
    });
    }

    if (content.includes("kjj")) {
    const img = new AttachmentBuilder('./images/kjjjj.png');

    return message.channel.send({
    content: 'kjjjjjjjj',
    files: [img]
    });
    }

    if (content.includes("monogamia")) {
    const img = new AttachmentBuilder('./images/monogamia.png');

    return message.channel.send({
    content: 'monogamia o bala',
    files: [img]
    });
    }

     if (content.includes("accidente")) {
    const img = new AttachmentBuilder('./images/accidentes.png');

    return message.channel.send({
    content: ' ',
    files: [img]
    });
    }

    if (content.includes("pedilo")) {
    const img = new AttachmentBuilder('./images/pedilo.png');

    return message.channel.send({
    content: 'Pedilo',
    files: [img]
    });
    }

    if (content.includes("turbina")) {
    const img = new AttachmentBuilder('./images/turbina.png');

    return message.channel.send({
    content: '',
    files: [img]
    });
    }

    if (content.includes("andre")) {
    const img = new AttachmentBuilder('./images/andre.png');

    return message.channel.send({
    content: 'Kiti:',
    files: [img]
    });
    }
    
    if (content.includes("mojito")) {
    const img = new AttachmentBuilder('./images/mojito.png');

    return message.channel.send({
    content: "Por fin atrapamo al trago de grado especial conocida como Mojito. Ya te tenemo', buena perra",
    files: [img]
    });
    }

    if (content.includes("lanus")) {
    const img = new AttachmentBuilder('./images/lanus.png');

    return message.channel.send({
    content: 'AGUANTE LANUS VIEJA:',
    files: [img]
    });
    }

    if (content.includes("julian")) {

    // Random entre 0 y 8
    const numero = Math.floor(Math.random() * 9);

    const lista = [
    "Juira negro, aca la araña manda",
    "*snifea sangre marron*",
    "Pero? Dijiste pero?",
    "*traicionado y encerrado en la habitacion marron por 1000 años",
    "Te falta odio NEGRO",
    "*Se enoja nazimente*",
    "Que paso papito?",
    "Ni siquiera esta es mi forma final",
    "No soy racista, tengo un negro"
    ];

    // Ruta de la imagen
    const img = new AttachmentBuilder(`./images/Julian/${numero}.png`);

    return message.channel.send({
    content: lista[numero],
    files: [img]
    });
    }

    
  // 👉 todo lo que tenga AttachmentBuilder acá
};
