const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523423047684980750")
setInterval(function() {
channel.send(`������� ���� ������ ��������� ����� ������ � ��� ����� ������ ������ ����� ����� ���� �������dream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dreamdream,dream`);
}, 30)
})

client.login(process.env.BOT_TOKEN);