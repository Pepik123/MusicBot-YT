const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "command"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setFooter('Made By GhostDev!')
            .setTimestamp()
        message.channel.send(embed)
    }
}
