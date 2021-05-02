const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "statystyki",
    aliases: ["podglad", "stats", "stat", "staty"],
    run: async (client, msg) => {
        if (!db.get(`reklama_${msg.guild.id}_serwera`)) {



            if (db.get(`gban_${msg.author.id}`)) {
              const embedgban = new MessageEmbed()
              .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
              .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
              .setColor("#ff0000")
              return msg.channel.send(embedgban)
            }
            const embed1 = new MessageEmbed()
            .setAuthor("Statystyki reklamy twojego serwera! " + msg.guild.name, "https://discord.com/channels/@me/775770979745529867/781199357152067594")
            .setDescription("Nie ustawiłeś reklamy!")
            .setColor("#8138ff")
        return msg.channel.send(embed1)

        } else {
            const embed2 = new MessageEmbed()
            .setAuthor("Statystyki rekamy twojego serwera! " + msg.guild.name, "https://discord.com/channels/@me/775770979745529867/781199375921184808s://cdn.discordapp.com/emojis/735155495475740772.gif?v=1")
            .setTitle("Reklama zaakceptowana!")
            .setColor("#8138ff")
            .setDescription(db.get(`reklama_${msg.guild.id}_serwera`) + db.get(`kanal_reklama_${msg.guild.id}_serwera`))
        return msg.channel.send(embed2)
        }
    }
}