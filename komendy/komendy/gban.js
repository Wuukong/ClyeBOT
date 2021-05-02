const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const config = {
    owners: ["643217488980475906", "548536308079788033"]
}

module.exports = {
    name: "gban",
    aliases: ["globalban", "global-ban"],
    run: async (bot, msg, args) => {
        if (!config.owners.includes(msg.author.id)) return;
        if (!args[0]) return msg.channel.send(`**Podaj id osoby!**`)
        const m = await msg.channel.send("Dodawanie osoby do bazy danych...")
        bot.guilds.cache.forEach(g => {
            if (g.ownerID === args[0]) g.leave();
        })
        db.set(`gban_${args[0]}`, true);
        m.edit("**Nadano Gbana!**")
    }
}