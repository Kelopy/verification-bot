const { CommandInteraction } = require("discord.js");

module.exports = {
  id: "decline-button",
  developer: false,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    interaction.reply({ content: "This interaction is under maintenance." });
    // try {
    //   interaction.member.kick();
    //   interaction.user.send({
    //     content:
    //       "You've declined the verification and been kicked from the server. \n~ If you wish to rejoin: https://discord.gg/hTawNmScd5",
    //   });
    //   console.log(
    //     `[Logging] ${interaction.user.username} declined the verification and should have been kicked.`
    //   );
    // } catch (err) {
    //   console.log(`[ERROR] ${err}`);
    //   return interaction.reply({ content: `[ERROR] ${err}`, ephemeral: true });
    // }
  },
};
