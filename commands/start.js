const str = require('../strings.json')
const {tableStr} = require('../utils/heistTableCreator.js')
const {data} = require('../utils/heistFilesParser.js')
const guildCreator = require('../utils/GuildInit.js')
module.exports = {
	name: `start`,
	description: str.startDescription,
	execute(message, args, client) {
        channel = message.channel
        if (channel.type != "dm"){
            channel.send(str.mustDM)
            return
        }
        channel.send("```"+tableStr+"```"+`\n${str.selectHeist}`)
        filter = m => m.content.length<2
        collector = channel.createMessageCollector(filter, {time : 60000, max: 1})
        var id
        collector.on('collect', m => {
            if (isNaN(m)) return
            id = parseInt(m)
            if(id > data.length){
                channel.send(str.notValidID)
                id = 0
                return
            }
            confirmMessage = channel.send(`${str.heist} ${id} ${str.confirmHeist}`).then(m => {
                m.react(`✅`)
                m.react(`❌`)
                filter = (e, u) => !u.bot
                collector = m.createReactionCollector(filter, {time:30000, max: 1})
                collector.on('collect', r => {
                    if(r.emoji.name!=`✅`) {
                        channel.send(str.canceled)
                        return
                    }
                    channel.send(str.waitForGuild)
                    guildCreator.guildInit(client, id, channel)
                })
                

            })

        })
	},
};