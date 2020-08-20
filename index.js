const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix, commandList} = require('./config.json')
const str = require('./strings.json')
const fs = require('fs');
const asciitable = require('ascii-table'); 

client.commands = new Discord.Collection();
var heistTable = new asciitable(str.heistTableName)
heistTable.setHeading(str.heistTableHeadingID, str.heistTableHeadingName, str.heistTableHeadingReward, str.heistTableHeadingPlayers)
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 
const heistFiles = fs.readdirSync('./heists/').filter(file => file.endsWith('.json'));
for (const file of heistFiles){
    const heist = require(`./heists/${file}`)
    heistTable.addRow(heist.id, heist.name, heist.reward, heist.players)
    
}
console.log(heistTable.toString()) 
client.once('ready', () => {
    console.log(`${client.user.tag} is logged in !`);
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(commandList.includes(command))client.commands.get(command).execute(message, args, heistTable.toString())

});
 
client.login(token);