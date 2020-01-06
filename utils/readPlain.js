// Read the file and print its contents.
const fs = require('fs');

module.exports = function (filePath, grep) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        console.log(data)
    });
}