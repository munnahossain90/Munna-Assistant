const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {  
    if(message.author.bot) return;
    if (msg.content === 'hi') {     
        msg.reply('Hello!');   
    }
    if (msg.content === 'Hi') {     
        msg.reply('Hello!');   
    } 
    if (msg.content === 'Hello') {     
        msg.reply('Hi!');   
    }
    if (msg.content === 'How are you?') {     
        msg.reply('Great & fully Charged. How about you?');   
    }
    if (msg.content === 'Hello') {     
        msg.reply('Hi!');   
    }
    if (msg.content === 'Bot') {     
        msg.reply('I am a boot  always ready to Help.');   
    }
    
   if (msg.content === 'Welcome') {
        msg.reply('Good to see you.', {files:     ['https://blog.vantagecircle.com/content/images/size/w730/2019/09/welcome.png']});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
