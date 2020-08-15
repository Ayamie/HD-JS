const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";
const ytdl = require('ytdl-core');
client.on("ready", message => {
    console.log('bot => ok');
    client.user.setActivity('develeper mon bot', { type:'STREAMING'});
     
})

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `hello`){
        message.channel.send('salut <a:valide:731232586411540552>');
    }
        
    if(message.content === `!help`){
         var help = '!ping => pong !'
                     '!hello => bonjour!'
                      'studio => la music'
                     
         message.channel.send(help)  
   } 

   if(message.content === `!tg`){
        message.channel.send('merci de ne pas insulter ');
    }

   if(message.content === `!Fdp`){
        message.channel.send('ta mère la pute tu arrête <a:ban:736946398490001408>');
    }

   if(message.content === `!nitro`){
        message.channel.send('1 invite = nitro classic  <a:emoji_55:739952349937664131>!');
                             
    }
    
if (message.content === "?help"){
let embed = new Discord.MessageEmbed()
.setTitle('Hello! :)')
.setDescription("**moderations**")
.addField('ANTI BOT')       
.setThumbnail('https://cdn.discordapp.com/attachments/738139327611142207/743484779579703306/20200813_110204.jpg')
.setImage('https://cdn.discordapp.com/attachments/738139327611142207/743483573809446973/20200813_105737.jpg')
.setColor('#020202')
.setFooter('jordan_offshl', 'https://cdn.discordapp.com/attachments/737388526848442459/742075728358539355/4713_ubot-1.png');

message.channel.send(embed);
 
    }
if(message.content === `?wl`){
    message.reply("vient d'avoir accès à inviteManager");
      
   }
      
if (message.content === `?ticket`){
let embed = new Discord.MessageEmbed()
.setTitle('')
.setImage('https://cdn.discordapp.com/attachments/728139161181224989/743476135894974554/8644.jpg')
.setDescription('hello welcome in the team!')
.setAuthor('https://cdn.discordapp.com/attachments/728139161181224989/743476135894974554/8644.jpg')
.setImage('https://cdn.discordapp.com/attachments/714924113713561660/717739024478896198/8881444f23794650da1fe33c1bed39e0.gif');
message.channel.send(embed);

   } 
if (message.content === `.mod`){
let embed = new Discord.MessageEmbed()
.setTitle('voici mes commands !help') 
.setDescription('<===Invitation==>')
.addField('!help')
.addField('**<===moderation==>**')
.setTimestamp()
.setFooter('create by jordan');

message.channel.send(embed);

   }
   
if(message.content === `?info`){
let embed = new Discord.MessageEmbed()
.setTitle('🔧inviteMaster info🔧')
.addFields(
	{ name: 'ANTI BOT', value: 'on', inline: true },
  { name: '\u200B', value: '\u200B' },
	{ name: 'ANTI RÔLE', value: 'on', inline: true },
	{ name: 'ANTI MESSAGE BAN', value: 'on', inline: true },
	{ name: 'ANTI MESSAGE KICK', value: 'on', inline: true },
)
.setFooter('inviteMaster');

message.channel.send(embed);
 }
 if (message.content === "?invite") {
let embed2 = new Discord.MessageEmbed()
.setTitle('invite le bot')
.setImage('https://discord.com/oauth2/authorize?client_id=724896203833344052&scope=bot&permissions=2146958847')
.setThumbnail('https://cdn.discordapp.com/attachments/737388526848442459/743022220758089738/images_29.jpeg')
.setURL('https://discord.com/oauth2/authorize?client_id=739208885897920614&scope=bot&permissions=8')
.setColor('#020202')
.setFooter('cree par jordan_offshl');

message.channel.send(embed2);

   }
   
   if (message.content === `?react`) { 	
        message.react('731232586411540552');
    }
    
   async function play(voiceChannel) { 	
   const connection = await voiceChannel.join(); 
   connection.play('audio.mp3'); 
   	
   	} 
   	
  client.on('message', message => { 
  	if (message.content === '?join') { 		     
      	if (message.channel.type === 'dm') return; 		
  	const voiceChannel = message.member.voice.channel; 		
  	if (!voiceChannel) { 			
  	return message.reply('please join a voice channel first!'); 		} 		
  	voiceChannel.join().then(connection => { 			
  	const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' }); 			
  	const dispatcher = connection.play(stream); 			
  	dispatcher.on('finish', () => voiceChannel.leave()); 	
  	
  	  	}); 	
  		
  		} 
  		
  }); 
  client.on('message', message => { 
 	if (message.content === '!join') { 		
  client.emit('guildMemberAdd', message.member); 
  	} 
  	
  });
   
if(message.content === "?giveaway"){
  let embed3 = new Discord.MessageEmbed()
  .addField('recompence nitro')
  .addField("participant 2")
   
message.channel.send(embed3);  
     
  }
  
  if(message.content === "d") {
      message.channel.send('${user.username} ok')
  }
  if (message.content === "?pp") {
let embed5 = new Discord.MessageEmbed()
.setDescription('🏜 avatar')
.setTitle('telecharger ici')
.setURL('https://discord.com/oauth2/authorize?client_id=739208885897920614&scope=bot&permissions=8')
.setImage('https://cdn.discordapp.com/attachments/737388526848442459/742891042873016361/20200706_092719_4.png')
.setColor('#020202')
.setFooter('avatar by user');

message.channel.send(embed5); 
    }
    
if(message.content === "?ticket") {
 let embed7 = new Discord.MessageEmbed()
 .setTitle('')
.setDescription('appuie sur la réaction 📩')
.setFooter('ticketReact');
 message.react('📩')
 
 message.channel.send(embed7);
 
  }
  
  if(message.content === "cv @Tutoriel Bot"){
      message.channel.send('tres bien et toi')
  }
  
  module.exports = {
    name: 'ticket',
    execute(client, message, args){
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("You have already opened a ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
message.channel.send("I have created a ticket for you");
chan.send("Support will be here shortly").then((m)=>{
    m.pin()
})
})   
 }
    }
}

client.on('guildMemberAdd', async member => { 	
const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log'); 	
if (728139161181224982) return; 	

const canvas = Canvas.createCanvas(700, 250); 	
const ctx = canvas.getContext('2d'); 
	
const background = await Canvas.loadImage('./wallpaper.jpg'); 	
ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 	
// Select the color of the stroke 	
ctx.strokeStyle = '#74037b'; 	
// Draw a rectangle with the dimensions of the entire canvas 	
ctx.strokeRect(0, 0, canvas.width, canvas.height); 	
const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png'); 	
channel.send(`Welcome to the server, ${member}!`, attachment); });

})
client.login(process.env.TOKEN);
