const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "odrzuc",
    aliases: ["dec"],
    run: async (client, msg, args) => {

        
        if (!msg.member.roles.cache.has("832544901245698099")) return;

        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj ID serwera do weryfikacji!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed1)
        }

        if (!db.get(`reklama_do_${args[0]}`)) {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Nie mamy takiej reklamy w naszej bazie danych!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed2)
           }

        if (!args[1]) {
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj powód\!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed3)
        }

        const osoba = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/809356941255901200/810218439607844864/bad.gif")
        .setDescription("**Reklama twojego serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z powodu: \n`" + args.slice(1).join(" ") + "`**")
        .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#ff0000")
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(osoba)

        const kanal_reklam = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/809356941255901200/810218439607844864/bad.gif")
        .setDescription("**Reklama tego serwera została odrzucona z powodu: \n`" + args.slice(1).join(" ") + "`**")
        .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#ff0000")
        client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(kanal_reklam)

        const embed4 = new MessageEmbed()
        .setAuthor("Akcja wykonana pomyślnie!", `https://cdn.discordapp.com/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
        .setDescription("**Pomyślnie odrzucono reklame z powodu: \n`" + args.slice(1).join(" ") + "`**")
        .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#8138ff")
         msg.channel.send(embed4)


        const statusy = new MessageEmbed()
        .setAuthor("Reklama odrzucona!", "https://cdn.discordapp.com/attachments/809356941255901200/810218439607844864/bad.gif")
        .setDescription("**Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z powodu: \n`" + args.slice(1).join(" ") + "`**")
        .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#ff0000")
        client.channels.cache.get("835235983897001994").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`)
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
    }

}