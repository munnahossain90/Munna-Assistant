const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {  
    if(message.author.bot) return;
    if (msg.content === 'ping') {     
        msg.reply('Pong!');   
    } 
   if (msg.content === 'koala') {
        msg.reply('This is a koala!', {files:       ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/480px-Koala_climbing_tree.jpg']});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
