const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("Hi")) {
    message.channel.send("Hello!");
  } else
 
  if (message.content.startsWith("How are you")) {
    message.channel.send("Great & fully Charged. How about you?");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
