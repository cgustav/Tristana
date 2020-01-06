const Fabricate = require('./utils/fabricate');
const Discord = require('discord.js');
const client = new Discord.Client();
const loadCommands = require('./utils/loadCommands');

const {
    prefix,
    token
} = require('./config.json');

const f = new Fabricate(prefix);

// load client commands
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);

loadCommands(client);

client.on('message', (message) => {

    /**************************************** */
    //             Load Command Args
    /**************************************** */

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();


    /**************************************** */
    //         Command Validation
    /**************************************** */

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `Debes proporcionar algún argumento, ${message.author}!`;

        if (command.usage)
            reply += `\nEl uso adecuado es: \`${prefix}${command.name} ${command.usage}\``;

        return message.channel.send(reply);
    }

    /**************************************** */
    //        Command GuildOnly (Server)
    /**************************************** */

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('No puedo ejecutar este comando dentro de un canal DM!');
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    /**************************************** */
    //           Command Cooldown
    /**************************************** */

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Debes esperar ${timeLeft.toFixed(1)} segundo(s) antes de volver a usar el comando \`${command.name}\`.`);
        }
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});