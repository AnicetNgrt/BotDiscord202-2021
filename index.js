const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = "=>";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.reply('Pong!');
    }
});

client.login(process.env.DISCORD_TOKEN);