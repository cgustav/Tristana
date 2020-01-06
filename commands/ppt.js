module.exports = {
    name: 'ppt',
    args: false,
    description: 'Comando de papel, piedra o tijeras!',
    execute(message, args) {
        const outputs = ['Piedra', 'Papel', 'Tijera'];
        const result = outputs[Math.floor(Math.random() * outputs.length)];
        message.channel.send(`${message.author} ha obtenido ${result}`);
    },
};