const Discord = require("discord.js")

module.exports = {
    name: "bot",
    aliases: ["botinfo", "infobot`"],
    run: async (client, message, args) => {

        const quick = require("quick.db");
        if (quick.get(`gban_${message.author.id}`)) {
          const embedgban = new Discord.MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return message.channel.send(embedgban)
        }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Informacje o Bocie!`)
        .setColor(`#8138ff`)
        .addField(`> **\💜 Nazwa:\**`, `**ClyeBOT**`, true)
        .addField(`> **\📄 Tag:\**`, `**#9206**`, true)
        .addField(`> **\🔧 Prefix:\**`, `c!`, true)
        .addField(`> **\👑 Wlasciciel:\**`, `**<@!548536308079788033>**`, true)
        .addField(`> **\🧠 Liczba serwerów:\**`, `${client.guilds.cache.size}`, true)
        .addField(`> **\👥 Liczba użytkowników:\**`, `${client.users.cache.size}`, true)
        .addField(`> **\💻 Wersja Discord.js:\**`, `12.15.1`, true)
        .addField(`> **\💪 Wersja Node.js:\**`, `15.12.0`, true)
        .addField(`> **\📈 Zużycie ramu:\**`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB/4GB`, true)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed);
}
}