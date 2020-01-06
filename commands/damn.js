module.exports = {
    name: 'ping',
    args: false,
    description: 'Damn Son!',
    execute(message, args) {
        message.channel.send('Damn Son!!.');
    },
};