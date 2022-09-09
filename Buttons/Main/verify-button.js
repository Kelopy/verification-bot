const {
  CommandInteraction,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  id: "verify-button",
  developer: false,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    if (interaction.member.roles.cache.some((role) => role.name === "Member")) {
      return interaction.reply({
        content: "❌ | You're already verified, you cannot access this.",
        ephemeral: true,
      });
    }

    const modal = new ModalBuilder()
      .setCustomId("verify-modal")
      .setTitle("Verification System");

    global.num1 = getRandomInt(999);
    global.num2 = getRandomInt(999);

    const answer_number = new TextInputBuilder()
      .setCustomId("answer-num")
      .setLabel(`What's ${global.num1} + ${global.num2}`)
      .setStyle(TextInputStyle.Short);

    const answer = new ActionRowBuilder().addComponents(answer_number);

    modal.addComponents(answer);
    await interaction.showModal(modal);
  },
};
