const Discord = require("discord.js")

module.exports = {
    name: "jak",
    aliases: ["instrukcja", "jakustawic`"],
    run: async (client, msg, args) => {

        const quick = require("quick.db");
        if (quick.get(`gban_${msg.author.id}`)) {
          const embedgban = new Discord.MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("Jak skonfigurować bota")
        .setColor("#8138ff")
        .setDescription("**Krok 1** \n Po dodaniu Bota na serwer wpisz komende **c!kanal #kanal**. Ustawisz wtedy kanal do wysylania reklam. \n\n **Krok 2** \n Następnie wpisz komende **c!reklama reklama** wysylasz wtedy reklame twojego serwera do weryfikacji \n\n **Krok 3** \n To wszystko! Skonfigurowanie bota jest takie proste!")
        msg.channel.send(embed)
    }
};