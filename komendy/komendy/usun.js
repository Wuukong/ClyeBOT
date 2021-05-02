const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "usun",
    aliases: ["usuń"],
    run: async (client, msg, args) => {
        if(!msg.member.roles.cache.has("832644995840212992")) return;

        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj ID serwera do weryfikacji!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed1)
        }

        if (!args[1]) {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj powód usunięcia reklamy!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed2)
        }

        if (!db.get(`reklama_${args[0]}`)) {
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Nie mamy takiej reklamy w bazie danych!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed3)
        }

        db.delete(`reklama_${args[0]}`)
        db.delete(`reklama_${args[0]}_id`)
        const statusy = new MessageEmbed()
        .setAuthor("Reklama usunięta!", "https://media.discordapp.net/attachments/809356941255901200/810767956811186176/bluntyladowanie.gif")
        .setDescription("Reklama o numerze `" + args[0] + "` została usunięta z powodu:\n`" + args.slice(1).join(" ") + "`")
        .setFooter(`Przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#8138ff")
        client.channels.cache.get("835235983897001994").send(statusy)
    }
}