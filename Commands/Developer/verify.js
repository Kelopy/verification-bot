const {
  SlashCommandBuilder,
  CommandInteraction,
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("verification system"),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle(":robot: Verification System :robot:")
      .setDescription(
        "To gain access to this server you have to verify that you are a legitimate user.\nclick the button provided below to verify yourself."
      );

    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("verify-button")
        .setLabel("🟩 VERIFY")
        .setStyle(ButtonStyle.Success),
      // new ButtonBuilder()
      //   .setCustomId("decline-button")
      //   .setLabel("🟥 DECLINE")
      //   .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setLabel("why?")
        .setStyle(ButtonStyle.Link)
        .setURL("https://why-not.lmao/")
    );

    interaction.reply({
      content: "**Verification System** has been initiated.",
      ephemeral: true,
    });

    interaction.channel.send({
      embeds: [embed],
      components: [buttons],
    });
  },
};
