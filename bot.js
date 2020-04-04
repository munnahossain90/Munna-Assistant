const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Hello');
  	}
    if (message.content.startsWith("ping", "hi", "Hello", "hello",)) {
    message.channel.send("Hi! There...😉");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
