// at the top of your file
const Discord = require('discord.js');

module.exports = (champion) => {
    return {
        color: 0x0099ff,
        title: champion.name,
        //url: 'https://discord.js.org',
        author: {
            name: 'Lol WIN!',
            icon_url: 'https://66.media.tumblr.com/cad1d7f89211907896ae5e22bd745519/tumblr_pkjdyxPW5X1xfdbz8o1_400.png',
            //url: 'https://discord.js.org',
        },
        description: champion.title,
        thumbnail: {
            url: champion.image,
        },

        fields: [{
                name: ':dagger: Rol',
                image: champion.image,
                value: champion.tags,
            },
            // {
            //     name: '\u200b',
            //     value: '\u200b',
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
        ],

        image: {
            url: 'https://i.imgur.com/wSTFkRM.png',
        },

        timestamp: new Date(),
        footer: {
            text: 'Some footer text here',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
        },
    }
};

/*
channel.send({
    embed: exampleEmbed
});
*/