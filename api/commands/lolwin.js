const lolChampionProfile = require('../embeds/lolChampionProfile');
const utl = require('../modules/lol/utils/network');

module.exports = {
    name: 'lolwin',
    args: true,
    cooldown: 3,
    aliases: ['win', 'whatineed'],
    usage: '<Nombre de Campeón>',
    description: 'Lol WIN (What I Need). Información sobre build y objetos recomendados para campeones de League of Legends.',
    execute(message, args) {
        const champions = api.championsLibrary;
        const champion = args[0];

        let search = champions['data'][capitalize(champion)];

        if (search == undefined || !search)
            return message.reply(`Este campeón no existe!.`);


        console.log(`SEARCH: ${JSON.stringify(search)}`);

        let tags = translator(search['tags']);

        const target = {
            name: search['name'],
            title: search['title'],
            image: utl.getChampImageUrl(search['image']['full']),
            tags: search['tags'].join(', '),
        }


        // if(result )
        //console.log('CHAMPIONS: ', );

        message.channel.send('Def...');

        message.channel.send({
            embed: lolChampionProfile(target)
        });

    },
};


function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


function translator(array) {

    const dictionary = {
        'Marksman': 'Tirador',
        'Assassin': 'Asesino',
        'Tank': 'Tanque',
        'Fighter': 'Luchador',
        'Support': 'Soporte',
        'Mage': 'Mago',
    }

    /*
    array.forEach(el => {
        dictionary[]
    });
    */

    console.log('TAGS! ', array);


    for (const el of array) {
        array[array.indexOf(el)] = dictionary[el];
    }

}