const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`client logged in as ${client.user.username}`);
    client.user.setActivity(`with verifications`);
    client.user.setStatus("dnd");
    loadCommands(client);
  },
};
