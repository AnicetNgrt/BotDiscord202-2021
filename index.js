const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = "=>";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${prefix}help`);
});

client.on('message', message => {
    if(doDiscardMessage(message)) return;
    const [command, args] = parseMessage(message.content);
    handleCommand(command, args);
});

function handleCommand(command, args) {
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
}

function doDiscardMessage(message) {
    if (message.author.bot) return true;
    if (!message.content.startsWith(prefix)) return true;
    return false;
}

function parseMessage(message) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    return [command, args];
}

client.login(process.env.DISCORD_TOKEN);