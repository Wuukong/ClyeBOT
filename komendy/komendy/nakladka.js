const Discord =  require('discord.js')
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "nakladka",
    aliases: ['nakładka'],
    run: async (client, msg) => {

        const quick = require("quick.db");
        if (quick.get(`gban_${msg.author.id}`)) {
          const embedgban = new MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }
    const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(1000, 1000);
    const ctx = canvas.getContext('2d');



    const background = await Canvas.loadImage(msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 2048}));    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  
    const avatar = await Canvas.loadImage('./nakladka.png');
    ctx.drawImage(avatar, 0, 0, 1000, 1000);

    const koniec = new Discord.MessageAttachment(canvas.toBuffer(), 'nakładka.png');

   

    msg.channel.send('**Wygenerowano Nakladke!**', koniec)
    }
}
