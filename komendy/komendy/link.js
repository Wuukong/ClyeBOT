const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ["invite", "zapros", "zaproś", "Engir.ADV", "bot", "linki", "link"],
    run: async (client, msg) => {

        const quick = require("quick.db");
        if (quick.get(`gban_${msg.author.id}`)) {
          const embedgban = new MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return msg.channel.send(embedgban)
        }
        const linki = new MessageEmbed()

    .setAuthor("Linki!", `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
    .setColor('#8138ff')
    .setThumbnail("https://cdn.discordapp.com/attachments/832645034234216479/832646243976216587/avatarclyde.png")
    .addField('Support', '**[Kliknij](https://discord.gg/E9UdexjsBV)**')
    .addField("Dodaj Bota'a", '**[Kliknij](https://discord.com/oauth2/authorize?client_id=832528489986916392&permissions=8&scope=bot)**')
    .setFooter(`Wykonano `)
    .setTimestamp()
    msg.channel.send(linki)
    }
    
}
