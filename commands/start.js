const str = require('../strings.json')
const {tableStr, heist_count} = require('../utils/heistTableCreator.js')
module.exports = {
	name: `start`,
	description: str.startDescription,
	execute(message, args) {
        channel = message.channel
        if (channel.type != "dm"){
            channel.send(str.mustDM)
            return
        }
        channel.send("```"+tableStr+"```")
        filter = m => m.content.length<2
        collector = channel.createMessageCollector(filter, {time : 60000, max: 1})
        var id
        collector.on('collect', m => {
          if (!isNaN(m))  {
              id = parseInt(m)
              if(id > heist_count){
                  channel.send(str.notValidID)
                  id = 0
              }
          }
        })
	},
};