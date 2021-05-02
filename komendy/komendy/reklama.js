const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "reklama",
    run: async (client, msg, args) => {



        if (db.get(`gban_${msg.author.id}`)) {
          const embedgban = new MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
            const brak_uprawnien = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setColor("#ff0000") 
            .setDescription("Nie posiadasz Uprawnień! Wymagane uprawnienia: `MANAGE_GUILD`")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
        return msg.channel.send(brak_uprawnien)
        }

        if (db.get(`reklama_do_${msg.guild.id}`)) {
            const czeka = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Reklama oczekuje na weryfikacje!")
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(czeka)
        }

        if (!db.get(`kanal_reklama_${msg.guild.id}`)) {
            const brak_kanału = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Najpierw ustaw kanał do reklam!")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            .setColor("#ff0000")
        return msg.channel.send(brak_kanału)
        }

        if (!args[0]) {
            const brak_reklamy = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription("Poprawne użycie: `.reklama <tresc>`")
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
        return msg.channel.send(brak_reklamy)
        }

        if (args.join(" ").includes("@here")) {
            const nie_dawać_here_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Reklama nie może zawierać pingu!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(nie_dawać_here_do_reklamy)
           }
        
           if (args.join(" ").includes("@everyone")) {
            const nie_dawać_evryone_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Reklama nie może zawierać pingu!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(nie_dawać_evryone_do_reklamy)
           }
            
           if (args.join(" ").includes("discord.gg/" || "https://discord.gg/" || "discordapp.com/invite/" || "https://discordapp.com/invite/")) {
            const nie_dodawaj_linku = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Reklama nie może zawierać zaproszenia do serwera!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
           return msg.channel.send(nie_dodawaj_linku)
           }
           msg.channel.createInvite({
            maxAge: 0
            }).then(invite => { 
                db.set(`reklama_do_${msg.guild.id}`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
                db.set(`reklama_do_${msg.guild.id}_name`, msg.guild.name)
                db.set(`reklama_do_${msg.guild.id}_osoba`, msg.author.id)
                db.set(`reklama_${msg.guild.id}_serwera`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
            
            const reply = new MessageEmbed()
            .setAuthor("Akcja wykonana pomyślnie!", "https://cdn.discordapp.com/attachments/809356941255901200/810218638866776114/sukces.gif")
            .setDescription(`Reklama twojego serwera została wysłana do weryfikacji!`)
            .setColor('#8138ff')
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            msg.channel.send(reply)

            const spr_reklam = new MessageEmbed()
            .setAuthor("Nowa reklama do sprawdzenia!", "https://cdn.discordapp.com/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif")
            .setDescription("Serwer: `" + msg.guild.name + " || " + msg.guild.id + "`\nOsoba: `" + msg.author.username + " || " + msg.author.id + "`")
            .addField("Treść:", "`" + db.get(`reklama_do_${msg.guild.id}`) + "`")
            .addField("Zaproszenie kliknij", `[**Zaproszenie**](https://discord.gg/${invite.code})`)
            .setColor('#8138ff')
            .setFooter("Komendą .acc <id> <numer> dodajesz reklamę || Komendą .dec <id> <powod> odrzucasz || Komendą .usun <id> <powód> usuwasz reklame")
            client.channels.cache.get("835235988280049716").send(spr_reklam)
            

        })
    }
}
