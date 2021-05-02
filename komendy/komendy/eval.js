const { MessageEmbed } = require("discord.js")
const config = {
    owners: ["643217488980475906", "548536308079788033"]
}
const { inspect } = require('util');
module.exports = {
    name: "eval",
    run: async (client, msg, args) => {



    if (!config.owners.includes(msg.author.id)) return;
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      //msg.channel.send(evaled);
      let value;
      if (evaled === undefined) {
          value = "<none>"
      } else {
          value = evaled
      }
      console.log(inspect(evaled));
      const embedgit = new MessageEmbed()
      .setAuthor("Wykonano pomyślnie!", client.user.displayAvatarURL())
      .addField("Kod:", "```js\n" + args.join(" ") + "```")
      .addField("Zwrócona wartość:", "```" + (value) + "```")
      .addField("Typ:", "```" + typeof(value) + "```")
      .setColor("YELLOW")
      msg.channel.send(embedgit)
      //console.log(evaled)
    }
    catch (error) {
      console.log(error);
      const evalerror = new MessageEmbed()
      .setAuthor("Wystąpił błąd!", client.user.displayAvatarURL())
      .setDescription("Błąd:\n```" + error + "```")
      .setColor(clientt.config.errorColor)
      msg.channel.send(evalerror)
    }
  }

    
}
