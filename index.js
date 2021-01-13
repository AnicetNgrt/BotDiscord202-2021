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
    else if (['source','code'].indexOf(command) !== -1) {
        message.reply('https://github.com/AnicetNgrt/BotDiscord202-2021');
    }
    else if (['?','help','aide'].indexOf(command) !== -1) {
        let ans = '';
        ans += 'Aide TIBO-MATIC:\n';
        ans += 'ping -> pong\n';
        ans += 'source -> lien source\n';
        ans += 'help -> afficher l\'aide\n'
        message.reply(ans);
    }
});

client.login(process.env.DISCORD_TOKEN);