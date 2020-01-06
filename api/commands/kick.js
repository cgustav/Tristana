module.exports = {
    name: 'kick',
    args: true,
    usage: '<usuario>',
    guildOnly: true,
    description: 'Comando para expulsar a un usuario temporalmente.',
    execute(message, args) {

        message.channel.send(`Te fuiste cagando @${args[0]}`);
    },
};