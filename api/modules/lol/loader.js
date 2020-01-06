// const https = require('https');
const fetch = require('node-fetch');

module.exports = async function () {

    const config = {
        versionNumber: '9.24.1',
        language: 'es_ES'
        //language: 'en_EN'
    }

    console.info('Loading Lol Champions Library...');

    return fetch(`https://ddragon.leagueoflegends.com/cdn/${config.versionNumber}/data/${config.language}/champion.json`, {
            method: 'get'
        })
        .then(res => res.json())
        .then(json => {
            console.info('LoL Champions Library Loaded.');
            //console.log(json);
            return json;
        })
        .catch(err => {
            console.log("Error: " + err.message);
        })

};