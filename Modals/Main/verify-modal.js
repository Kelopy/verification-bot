const { CommandInteraction } = require("discord.js");

module.exports = {
  id: "verify-modal",
  developer: false,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    const answer_num = interaction.fields.getTextInputValue("answer-num");
    const correct_answer = global.num1 + global.num2;
    const member_role = interaction.guild.roles.cache.get(
      "1017539215141126204"
    );

    if (answer_num == correct_answer) {
      interaction.member.roles.add(member_role);
      interaction.reply({
        content: "✅ | Successfully Verified!",
        ephemeral: true,
      });
      return console.log(
        `[Logging] ${interaction.user.username} was successfully verified.`
      );
    } else {
      interaction.reply({
        content: "❌ | The answer you entered was **incorrect**.",
        ephemeral: true,
      });
      return console.log(
        `[Logging] ${interaction.user.username} failed the verification.`
      );
    }
  },
};
