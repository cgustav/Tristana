const https = require('https');

const config = {
    versionNumber: '9.24.1',
    language: 'es_ES'
    //language: 'en_EN'
}

module.exports = {
    // getChampionsLibrary: function () {
    //     console.info('Loading Lol Champions Library...');
    //     https.get(`https://ddragon.leagueoflegends.com/cdn/${config.versionNumber}/data/${language}/champion.json`)
    //         .then(data => {
    //             console.info('LoL Champions Library Loaded.');
    //             return data;
    //         });
    // },

    getChampImageUrl: function (assetFile) {
        return `https://ddragon.leagueoflegends.com/cdn/${config.versionNumber}/img/champion/${assetFile}`
    },

    getRuneImageUrl: function (assetFile) {
        return `https://ddragon.leagueoflegends.com/cdn/${config.versionNumber}/img/champion/${assetFile}`
    }

}