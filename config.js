const Discord = require('discord.js');
const loadCommands = require('./utils/loadCommands');


global.api = {}
global.fetch = require('node-fetch');

module.exports = async function (client) {

    const {
        token
    } = require('./config.json');

    /* Modules */
    api.championsLibrary = await require('./api/modules/lol/loader')();

    client.commands = new Discord.Collection();

    /* Authentication */
    client.login(token);

    loadCommands(client);

    client.once('ready', () => {
        console.info('Bot Ready!');
    });

    return client;

}