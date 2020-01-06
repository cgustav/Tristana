module.exports = class Fabricate {
    constructor(prefix) {
        this.prefix = prefix;
        this.command;
        this.args;
    }

    dm(comm) {
        return `${this.prefix + comm}`;
    }

    match(input, strict) {
        //return input === this.dm(comm);
        //return input.startsWith(this.dm(comm));
        //if (!strict) strict = false;
        console.log('input');
        return (!strict) ?
            input.startsWith(this.dm(this.command)) : input === this.dm(this.command);
    }

    isNotValid(message) {
        return (!message.content.startsWith(this.prefix) || message.author.bot);
    }

    getMessageArgs(message) {
        return message.content.slice(this.prefix.length).split(/ +/);
        //return args.shift().toLowerCase();
    }

    load(message) {
        this.args = this.getMessageArgs(message);
        this.command = this.args.shift().toLowerCase();
    }


}