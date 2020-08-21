const str = require('../strings.json')
const asciitable = require('ascii-table');
const {data} = require('./heistFilesParser')
var heistTable = new asciitable(str.heistTableName)
heistTable.setHeading(str.heistTableHeadingID, str.heistTableHeadingName, str.heistTableHeadingReward, str.heistTableHeadingPlayers)
for (const i in data) {
    heist = data[i]
    heistTable.addRow(heist.id, heist.name, heist.reward, heist.players)
}

tableStr = heistTable.toString();
module.exports = {tableStr}
