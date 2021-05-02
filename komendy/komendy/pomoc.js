const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
 
module.exports = {
    name: "help",
    aliases: ["pomoc", "pomocy", "h", "p"],
 
    async run (client, message, args){

        const quick = require("quick.db");
        if (quick.get(`gban_${message.author.id}`)) {
          const embedgban = new Discord.MessageEmbed()
          .setAuthor("Jesteś globalnie zbanowany!", `https://media.discordapp.net/attachments/809356941255901200/810767989342994442/bluntywykrzyknik.gif`)
          .setDescription("Na twoje konto została nałożona globalna blokada. Nie możesz wykonywać zadnych komend w bocie.")
          .setColor("#ff0000")
          return message.channel.send(embedgban)
        }

        const main = new Discord.MessageEmbed()
        .setAuthor('Menu Pomocy!', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .setDescription("Aby wybrać kategorie, przysuń strzałki pod wiadomością!")
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wyołano")
        .setTimestamp()
 
        const moderacyjne = new Discord.MessageEmbed()
        .setAuthor('Moderacyjne', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!ban', 'Banuje osobe')
        .addField('c!kick', 'Wyrzuca osobe')
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wyołano")
        .setTimestamp()
 
        const rozrywka = new Discord.MessageEmbed()
        .setAuthor('Konfiguracyjne', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!kanal', 'Ustawia kanal do reklam')
        .addField('c!reklama', 'ustawia reklame')
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wywołano")
        .setTimestamp()
 
        const informacyjne = new Discord.MessageEmbed()
        .setAuthor('Informacyjne', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!pomoc', `Menu Pomocy` )
        .addField('c!bot', 'Statystyki Bota')
        .addField('c!staty', 'Statystyki twojej reklamy')
        .addField('c!ekipa', 'Cała ekipa Bota')
        .addField('c!linki', 'Linki bota')
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wywołano")
        .setTimestamp()

        const inne = new Discord.MessageEmbed()
        .setAuthor('Inne', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!nakladka', `Generuje Nakladke` )
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wywołano")
        .setTimestamp()

        const weryfikacyjne = new Discord.MessageEmbed()
        .setAuthor('Weryfikacyjne', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!akceptuj', 'Akceptuj reklame')
        .addField('c!odrzuc', 'Odrzuc reklame')
        .addField("c!usun", "Usuń reklame")
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wyołano")
        .setTimestamp()

        const dev = new Discord.MessageEmbed()
        .setAuthor('Developerskie', `https://images-ext-1.discordapp.net/external/bdgUL3QuAwrmYHPCQ151pXGCOxOvX-4eQl4a5IGVzMY/https/media.discordapp.net/attachments/735049851016052768/817408866479767604/782242377363881984.gif`)
        .addField('c!eval', 'Wykonuje podany kod')
        .addField('c!wyjdz', "Wychodzi z podanego serwera")
        .addField('c!gban', "Banuje osobe globalnie (nie może używać komend)")
        .addField('c!gunban', "od banowywuje osobe globalnie")
        .setColor('#8138ff')
        .setFooter("Menu Pomocy | Wyołano")
        .setTimestamp()
 
        const emojiList = ["⏪", "⏩"];
        const pages = [main, rozrywka, informacyjne, moderacyjne, weryfikacyjne, dev, inne]
        const timeout = 120000;
 
        pagination(message, pages, emojiList, timeout)
    }
}