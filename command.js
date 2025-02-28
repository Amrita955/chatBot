const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'call',
        description: 'Customer case assistnace'
    },
];

const CLIENT_ID = 'enter client id';
const rest = new REST({ version: '10' }).setToken('tokenfrom');




//immidiately invoked function expression
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
