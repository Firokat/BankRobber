const str = require('../strings.json')
module.exports = {
	name: `clear`,
	description: `Clears all bot's server`,
	execute(message, args, client) {
        if (message.channel.type!='dm'){
            message.channel.send(str.mustDM)
        }
        if(message.author.id != 370177439860654081) {
            message.reply(str.noPermission)
            return
        }
        client.guilds.cache.forEach(guild => {
            if (guild.ownerID == client.user.id){
                message.reply(`${guild.name} will be deleted`)
                guild.delete()
            }
        });
	},
};