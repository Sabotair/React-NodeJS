
const fs = require('fs');
const path = require('path');

const writeFile = (note) => {
    fs.writeFile(path.join(__dirname, '../public/database/person.json'), JSON.stringify(note), (err) => {
        if (err) {
            throw err
        }
    })

}



module.exports = {
    writeFile
}