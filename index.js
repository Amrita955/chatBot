const { Client, GatewayIntentBits } = require('discord.js');

const clinet = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.MessageContent
    ]
});
clinet.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }
    message.reply('Hi iam your helping Bot you can call me Gigi');
});

clinet.on('interactionCreate', (interaction) => {
    console.log('interaction', interaction.commandName);
    if (interaction?.commandName === 'call') {
        interaction.reply('customer repesentive will call you in 30 min!');
    } else {
        interaction.reply('pong!!');
    }
});



clinet.login('MTI0OTQxNjY4MDk1NDc4OTk3OQ.G0ju8x.qnLuMw5MOiiBua7prvGdx6oLNvE8flw7ZQFJzA');