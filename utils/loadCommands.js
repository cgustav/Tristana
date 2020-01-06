const fs = require('fs');

module.exports = function (client) {
    const filePath = process.cwd() + '/commands/'
    const commandFiles = fs.readdirSync(filePath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`${filePath + file}`);

        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        client.commands.set(command.name, command);
    }
}