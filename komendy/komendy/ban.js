const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "ban",
  aliases: ["banuj", "zbanuj"],
  run: async (client, message, args) => {
  const kanal =
    message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(x => x.name === args.join(" ")) ||
    message.mentions.members.first();

    const quick = require("quick.db");
    if (quick.get(`gban_${message.author.id}`)) {
      const embedgban = new Discord.MessageEmbed()
      .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
      .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
      .setColor("#ff0000")
      return message.channel.send(embedgban)
    }

    if(!message.member.hasPermission("BAN_MEMBERS")) {
      const error_embed7 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Nie posiadzasz uprawnien! Wymagane uprawnienia: `BAN_MEMBERS`")
      .setColor("#ff0000")
      .setFooter("System Banów | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed7)
  }

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      const error_embed6 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Bot nie posiada uprawnień! Wymagane uprawnienia: `BAN_MEMBERS`")
      .setColor("#ff0000")
      .setFooter("System Banów | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed6)
  }

  if (!kanal) {
    const error_embed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Poprawne użycie: `.ban <@user> <powód>`")
      .setColor("#ff0000")
      .setFooter("System Banów  | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed)
  }

  let osobadowyrzucenia = message.guild.member(message.mentions.users.first());

  if(!osobadowyrzucenia) {
    const error_embed9 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Nie znaleziono takiej osoby na serwerze!")
      .setColor("#ff0000")
      .setFooter("System Banów | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed9)
  }

  if(osobadowyrzucenia.hasPermission("MANAGE_MESSAGES")) { 
    const error_embed3 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Bot nie może zbanować tej osoby!")
      .setColor("#ff0000")
      .setFooter("System Banów | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed3)
  }

  if(!args[1]) {
    const error_embed2 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Poprawne użycie: `.ban <@user> <powód>`")
      .setColor("#ff0000")
      .setFooter("System Banów | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed2)
  }


  const powod = args.slice(1).join(" ");

  const succes_embed2 = new Discord.MessageEmbed()
  .setColor("#8138ff")
  .setAuthor("Zostałeś zbanowany!", `https://cdn.discordapp.com/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
  .addField(`> **\Akcja:\**`, `**Ban**`)
  .addField(`> **\Moderator:\**`, `**${message.author}**`)
  .addField(`> **\Zbanowany:\**`, `**${osobadowyrzucenia}**`)
  .addField(`> **\Powód:\**`, `**${powod}**`)
  .addField(`> **\Serwer:\**`, `**${message.guild.name}**`)
  .setColor("#ff0000")
  .setFooter("System Banów | Wywołano")
  .setTimestamp();
osobadowyrzucenia.send(succes_embed2)

osobadowyrzucenia.ban({reason: powod})

  const succes_embed = new Discord.MessageEmbed()
    .setColor("#8138ff")
    .setAuthor("Akcja wykonana pomyślnie!", `https://cdn.discordapp.com/emojis/751937064215511090.gif?v=1`)
    .addField(`> **\Akcja:\**`, `**Ban**`)
    .addField(`> **\Moderator:\**`, `**${message.author}**`)
    .addField(`> **\Zbanowany:\**`, `**${osobadowyrzucenia}**`)
    .addField(`> **\Powód:\**`, `**${powod}**`)
    .addField(`> **\Serwer:\**`, `**${message.guild.name}**`)
    .setColor("#00ff04")
    .setFooter("System Banów | Wywołano")
    .setTimestamp();
  return message.channel.send(succes_embed)
}
};