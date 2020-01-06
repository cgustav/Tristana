const randomImageEmbed = require('../embeds/randomImage');

module.exports = {
    name: 'damn',
    args: false,
    description: 'Damn Son!',
    execute(message, args) {
        //message.channel.send('Damn Son!!.');
        message.channel.send({
            embed: randomImageEmbed
        });
    },
};