const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "kanal",
    aliases: ["kanał"],
    run: async (client, msg, args) => {




        if (db.get(`gban_${msg.author.id}`)) {
          const embedgban = new MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }

        if (!msg.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Nie posiadasz uprawnien! Wymagane uprawnienia: `MANAGE_GUILD`")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            .setColor("#ff0000")
        return msg.channel.send(permisja)
        }
    
        const men_kan = 
        msg.guild.channels.cache.get(args[0]) ||
        msg.guild.channels.cache.find(x => x.name === args.join(" ")) ||
        msg.mentions.channels.first();
    
        if (!men_kan) {
            const blad_kanal = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Oznacz kanał do wysyłania reklam!")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            .setColor("#ff0000")
        return msg.channel.send(blad_kanal)
        }
    
        if (!msg.guild.channels.cache.get(men_kan.id)) {
            const blad_kanal2 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Oznacz Kanał do wysyłania reklam!")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            .setColor("#ff0000")
        return msg.channel.send(blad_kanal2)
        }
    
        if (men_kan.type !== "text") {
            const no_oznacz_ten_kanal_deklu = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Oznacz kanał do wysyłania reklam!")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            .setColor("#ff0000")
            return msg.channel.send(no_oznacz_ten_kanal_deklu)
        }
    
        db.set(`kanal_reklama_${msg.guild.id}`, men_kan.id)
    
        const embed = new Discord.MessageEmbed()
        .setAuthor("Akcja wykonana pomyślnie!", "https://cdn.discordapp.com/attachments/809356941255901200/810218638866776114/sukces.gif")
        .setDescription("Ustawiono kanał do reklam!")
        .setFooter("System Reklam | Wywołano")
        .setTimestamp()
        .setColor('#8138ff')
        await msg.channel.send(embed), men_kan.setTopic("Na tym kanale reklamy wysyła bot <@832528489986916392>")
    
    
    }
}