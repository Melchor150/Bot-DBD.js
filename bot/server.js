const fetch = require("node-fetch");
const dbd = require("dbd.js");
 
const bot = new dbd.Bot({
token: process.env.TOKEN, 
prefix: "$getServerVar[prefix]" 
})


//VARIABLES - Nombre: "Valor"
bot.variables({
prefix: "!"
});

//ESTADOS
bot.status({
text: "Mencioname = prefix | $allMembersCount miembros | $serverCount servidores",
type: "WATCHING",
time: "10"
})

//OTROS COMANDOS
bot.command({
name: "<@ID BOT>",
nonPrefixed: "true",
code: `Mi prefix es \`$getServerVar[prefix]\``
});

bot.onMessage()
 
const fs = require("fs");
const folders = fs.readdirSync("./commands/");
for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));
  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      aliases: command.aliases,
      code: command.code
    });
  }
}

//FUNCIÓN 24/7
setInterval(async () => {
  await fetch("https://NOMBRE-DEL-PROYECTO.glitch.me").then(
    console.log("Ping Pong")
  );

}, 240000);
