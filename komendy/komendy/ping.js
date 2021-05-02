const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    usage: "ping",
    aliases: ["pong"],
    ownerOnly: false,
    run: async (client, message, args, errorEmbed, succesEmbed) => {

      const quick = require("quick.db");
      if (quick.get(`gban_${message.author.id}`)) {
        const embedgban = new MessageEmbed()
        .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
        .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
        .setColor("#ff0000")
        return message.channel.send(embedgban)
      }
        const embed = new MessageEmbed()
        .setAuthor("🏓 Pong!")
        .setColor("#8138ff")
        .setDescription(`Ping bota: **${Math.round(client.ws.ping)}**ms!`)
        message.channel.send(embed)
  } 
}