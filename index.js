const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadModals } = require("./Handlers/modalHandler");
const { loadButtons } = require("./Handlers/buttonHandler");
const { loadSelectMenus } = require("./Handlers/selectMenuHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.modals = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();

const { connect } = require("mongoose");
connect(client.config.database, {}).then(() =>
  console.log("connected to the database.")
);

loadEvents(client);
loadModals(client);
loadButtons(client);
loadSelectMenus(client);

client.login(client.config.token);
