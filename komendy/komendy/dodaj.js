const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "dodaj",
    aliases: ["acc", "akceptuj`"],
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("832644995840212992")) return;


        const quick = require("quick.db");
        if (quick.get(`gban_${msg.author.id}`)) {
          const embedgban = new MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }

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
            .setDescription(`Nie ma takiej reklamy w naszej bazie danych!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed2)
        }

        if (!args[1]) {
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj numer!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed3)
        }

        if (db.get(`reklama_${args[1]}`)) {
            const embed5 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Numer jest zajęty!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed5)
        }

        db.set(`reklama_${args[1]}`, db.get(`reklama_do_${args[0]}`))
        db.set(`reklama_${args[1]}_id`, args[0])
        
        const ustawia = new Discord.MessageEmbed()
        .setAuthor("Reklama zweryfikowana!", "https://cdn.discordapp.com/attachments/809356941255901200/810218638866776114/sukces.gif")
        .setDescription("**Reklama twojego serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została zweryfikowana i dodana pod numer `" + args[1] + "`**")
        .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor('#8138ff')
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(ustawia)


        const rekkan = new Discord.MessageEmbed()
    .setAuthor("Dodano!", "https://cdn.discordapp.com/attachments/809356941255901200/810218638866776114/sukces.gif")
    .setDescription("**Reklama tego serwera została zweryfikowana i dodana pod numer `" + args[1] + "`!**")
    .setColor('#8138ff')
    .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
    client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(rekkan)

    const embed4 = new MessageEmbed()
    .setAuthor("Akcja wykonana pomyślnie!", `https://cdn.discordapp.com/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
    .setDescription(`**Pomyślnie dodano reklame która znajduje się pod numerem ${args[1]}**`)
    .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
    .setColor("#8138ff")
     msg.channel.send(embed4)

    const statusy = new Discord.MessageEmbed()
    .setAuthor("Reklama zweryfikowana!", "https://cdn.discordapp.com/attachments/809356941255901200/810218638866776114/sukces.gif")
    .setDescription("**Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została zweryfikowana i dodana pod numer `" + args[1] + "`**")
    .setFooter(`Weryfikator: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
    .setColor("#8138ff")
    client.channels.cache.get("835235983897001994").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`)
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
        
    }
}