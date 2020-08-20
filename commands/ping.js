const str = require('../strings.json')
module.exports = {
	name: `ping`,
	description: str.pingDescription,
	execute(message, args) {
        message.channel.send(str.pingResponse)
	},
};