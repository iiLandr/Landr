var prefix = "+"
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});


const developers = ["323152294289866763"] // Toxic Codes
client.on ('message'، message => {// Toxic Codes
    var argresult = message.content.split (``) .slice (1) .join ('')؛ // Toxic Codes
      if (! developers.includes (message.author.id)) return؛
      
  if (message.content.startsWith (adminprefix + 'setg')) {
    client.user.setGame (argresult)؛
      message.channel.send (`** ✅ $ {argresult} **`)
  آخر 
     if (message.content === (adminprefix + "leave")) {// Toxic Codes
    message.guild.leave ()؛ // Toxic Codes
  آخر  
  if (message.content.startsWith (adminprefix + 'setw')) {
  client.user.setActivity (argresult ، {type: 'WATCHING'})؛ // Toxic Codes
      message.channel.send (`** ✅ $ {argresult} **`) // Toxic Codes
  آخر 
  if (message.content.startsWith (adminprefix + 'setl')) {
  client.user.setActivity (argresult ، {type: 'LISTENING'})؛
      message.channel.send (`** ✅ $ {argresult} **`) // Toxic Codes
  آخر 
  if (message.content.startsWith (adminprefix + 'sets')) {
    client.user.setGame (argresult، "https://www.twitch.tv/zero")؛
      message.channel.send (`** ✅ **`) // Toxic Codes
  }
  if (message.content.startsWith (adminprefix + 'setname')) {
  client.user.setUsername (argresult). ثم
      message.channel.send (`تغيير الاسم إلى .. ** $ {argresult} **`)
آخر
  if (message.content.startsWith (adminprefix + 'setprefix')) {// Toxic Codes
  client.user.setPrefix (argresult). ثم
      message.channel.send (`Preging Changing .. ** $ {argresult} **`) // Toxic Codes
آخر
if (message.content.startsWith (adminprefix + 'setavatar')) {// Toxic Codes
  client.user.setAvatar (argresult)؛
    message.channel.send (`تغيير الصورة الرمزية إلى: ** $ {argresult} **`)؛ // Toxic Codes
}
}) ؛ // الرموز السامة








client.login(process.env.BOT_TOKEN);
