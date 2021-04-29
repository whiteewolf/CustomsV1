const Command = require('../../Structures/Command');
const ms = require('ms');
const {
    MessageEmbed
} = require('discord.js')
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['pfp', 'av'],
            category: "Utils",
            disabled: false,
            clientPerms: [],
            userPerms: [],
            owner: false,
            rateLimit: 3,
            cooldown: 30000
        });
    }
    async run(message, args) {
        let member = message.mentions.members.first() || this.client.utils.getMember(message, args.join(" ")) || message.member;
        message.channel.send(new MessageEmbed()
            .setColor(member.displayHexColor)
            .setTitle(member.user.tag)
            .setImage(member.user.displayAvatarURL({
                dynamic: true,
                size: 4096
            }))
            .setFooter(this.client.config["config"].copyright))
    }
};