const {data} = require("../utils/heistFilesParser");
const { channels } = require("../heists/01");
module.exports = {
    guildInit(client, id, channel){
        guildData = data[id-1]
        client.guilds.create(guildData.name).then(g => {
            g.channels.cache.forEach(c => {
                if(c.name == "General"){
                    c.createInvite().then(i =>{
                        channel.send(`${i}`)
                    })
                }
            });
        })
    }
}