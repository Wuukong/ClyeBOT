const Discord = require("discord.js")

module.exports = {
    name: "ekipa",
    aliases: ["squad", "ludzie`"],
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
        .setTitle(`Ekipa Bota!`)
        .setColor(`#8138ff`)
        .addField(`> **\ <a:djament:829616272845045832> Właściciel:\**`, `**[! Maciex#3605](https://discord.com/users/548536308079788033)**`, true)
        .addField(`> **\ <a:botdeveloper:829599316770422784> Developer:\**`, `**[PawcineQ#9243](https://discord.com/users/643217488980475906)**`, true)
        .addField(`> **\ <a:botdeveloper:829599316770422784> Developer:\**`, `**[_rus3k#0509](https://discord.com/users/779352949054505021)**`, true)
        .addField(`> **\ <a:rgb_mlotek:829599317077262346> Moderator:\**`, `**[ᕈＪ𝖮𝜏∈ᖇ#8358](https://discord.com/users/701405236086046800)**`, true)
        .addField(`> **\ <a:rgb_mlotek:829599317077262346> Moderator:\**`, `**[kafel#1234](https://discord.com/users/734791748890656878)**`, true)
        .addField(`> **\ <a:verify:829599316548255745> Helper:\**`, `**[! siwy#3255](https://discord.com/users/809159175141326859)**`, true)
        .addField(`> **\ <a:verify:829599316548255745> Helper:\**`, `**[Zwykły użytkownik#2270](https://discord.com/users/593441930822549526)**`, true)
        .addField(`> **\ <a:verify:829599316548255745> Test Helper:\**`, `**[TF1 Szymek#4122](https://discord.com/users/600005361235132449)**`, true)
        .addField(`> **\ <a:verify:829599316548255745> Test Helper:\**`, `**[kacper#1636](https://discord.com/users/711639239971962880)**`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed);
}
}