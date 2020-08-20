const str = require('../strings.json')

module.exports = {
	name: `start`,
	description: `start the heist`,
	execute(message, args, heistTable) {
        channel = message.channel
        if (channel.type != "dm"){
            channel.send(str.mustDM)
            return
        }
        channel.send("```"+heistTable+"```")
	},
};