const guildCreator = require('../utils/GuildInit.js')
module.exports={
    name: `fstart`,
	description: ``,
    execute(message, args, client){
        guildCreator.guildInit(client, args[0], message.channel)
    }
}