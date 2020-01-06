const {
    prefix
} = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'Listado de todos los comandos disponibles.',
    aliases: ['commands'],
    usage: '[nombre de comando]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const {
            commands
        } = message.client;

        //General command result
        if (!args.length) {

            data.push('Esta es la lista con todos mis comandos:');
            data.push(commands.map(command => `***${command.name}***`).join('\n'));
            data.push(`\nDebes usar \`${prefix}help [comando]\` para obtener la información de un comando en específico!`);

            return message.author.send(data, {
                    split: true
                })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Te he enviado en MP con todos mis comandos!');
                })
                .catch(error => {
                    console.error(`No te he podido enviar mis comandos ${message.author.tag}.\n`, error);
                    message.reply('Parece ser que no te puedo enviar Mensajes Privados, ¿los has desactivado?');
                });

        } else {
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command)
                return message.reply('Ese no es un comando válido');

            data.push(`**Nombre:** ${command.name}`);

            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Descripción:** ${command.description}`);
            if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

            message.channel.send(data, {
                split: true
            });
        }



        //Specific command result
    },
};