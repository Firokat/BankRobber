const str = require('../strings.json')
const fs = require('fs');
const heistFiles = fs.readdirSync('./heists/').filter(file => file.endsWith('.js'));
var data=[]
for (const file of heistFiles){
    const heist = require(`../heists/${file}`)
    data.push(heist)
}
module.exports={data}