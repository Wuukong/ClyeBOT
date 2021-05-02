const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "kick",
  aliases: ["wyrzuć", "wyrzuc`"],
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

    if(!message.member.hasPermission("KICK_MEMBERS")) {
      const error_embed7 = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Nie posiadzasz uprawnien! Wymagane uprawnienia: `KICK_MEMBERS`")
      .setColor("RED")
      .setFooter("System Kick| Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed7)
  }

    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      const error_embed6 = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Bot nie posiada uprawnień! Wymagana uprawnienia: `KICK_MEMBERS`")
      .setColor("RED")
      .setFooter("System Kick | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed6)
  }

  if (!kanal) {
    const error_embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Poprawne użycie: `.kick <@user> <powód>`")
      .setColor("RED")
      .setFooter("System Kick | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed)
  }

  let osobadowyrzucenia = message.guild.member(message.mentions.users.first());

  if(!osobadowyrzucenia) {
    const error_embed9 = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Nie znaleziono takiej osoby na serwerze!")
      .setColor("RED")
      .setFooter("System Kick  | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed9)
  }

  if(osobadowyrzucenia.hasPermission("MANAGE_MESSAGES")) { 
    const error_embed3 = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Bot nie może wyrzucić tej osoby!")
      .setColor("RED")
      .setFooter("System Kick | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed3)
  }

  if(!args[1]) {
    const error_embed2 = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Coś poszło nie tak!", `https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1`)
      .setDescription("Poprawne użycie: `.kick <@user> <powód>`")
      .setColor("RED")
      .setFooter("System Kick | Wywołano")
      .setTimestamp();
    return message.channel.send(error_embed2)
  }


  const powod = args.slice(1).join(" ");

  const succes_embed2 = new Discord.MessageEmbed()
  .setColor("#8138ff")
  .setAuthor("Zostałeś wyrzucony!", `https://cdn.discordapp.com/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
  .addField(`> **\Akcja:\**`, `**Kick**`)
  .addField(`> **\Moderator:\**`, `**${message.author}**`)
  .addField(`> **\Wyrzucony:\**`, `**${osobadowyrzucenia}**`)
  .addField(`> **\Powód:\**`, `**${powod}**`)
  .addField(`> **\Serwer:\**`, `**${message.guild.name}**`)
  .setColor("#8138ff")
  .setFooter("System Kick | by PawcineQ | Wywołano")
  .setTimestamp();
osobadowyrzucenia.send(succes_embed2)

osobadowyrzucenia.kick(powod)

  const succes_embed = new Discord.MessageEmbed()
    .setColor("#8138ff")
    .setAuthor("Akcja wykonana pomyślnie!", `https://cdn.discordapp.com/emojis/751937064215511090.gif?v=1`)
    .addField(`> **\Akcja:\**`, `**Kick**`)
    .addField(`> **\Moderator:\**`, `**${message.author}**`)
    .addField(`> **\Wyrzucony:\**`, `**${osobadowyrzucenia}**`)
    .addField(`> **\Powód:\**`, `**${powod}**`)
    .addField(`> **\Serwer:\**`, `**${message.guild.name}**`)
    .setColor("#8138ff")
    .setFooter("System Kick | by PawcineQ | Wywołano")
    .setTimestamp();
  return message.channel.send(succes_embed)
}
}