const Discord = require("discord.js")

module.exports = {
    name: "wyjdz",
    run: async (client, msg, args) => {
        if (msg.author.id !== "548536308079788033", "643217488980475906")  return;

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Podaj ID!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed)
        }

        if (!client.guilds.cache.get(args[0])) {
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1")
            .setDescription(`Bot nie jest na takim serwerze!`)
            .setColor("#ff0000")
            .setFooter("System Reklam | Wywołano")
            .setTimestamp()
            return msg.channel.send(embed3)
        }

        client.guilds.cache.get(args[0]).leave()
        const embed3 = new Discord.MessageEmbed()
        .setAuthor("Bot wyszedł!")
        .setTimestamp()
        return msg.channel.send(embed3)
    }
}
