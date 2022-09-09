const { EmbedBuilder, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  /**
   *
   * @param {GuildMember} member
   */
  execute(member) {
    const { user, guild } = member;

    const welcomer = new WebhookClient({
      id: "1017747500616134666",
      token:
        "7kg5llljsvY7AJldRDuyl31rLKbZRtaIMEd3KPPfbW_po0-Rmpoa471vALV6CUyI36D9",
    });

    const embed = new EmbedBuilder()
      .setColor("AQUA")
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `
        Welcome ${member} to **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>`
      )
      .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL({ dynamic: true, size: 512 }),
      })
      .setFooter({ text: `User ID: ${user.id}` });

    welcomer.send({ embeds: [embed] });
  },
};
