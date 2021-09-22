const { Client, Intents } = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
    console.log(`${client.user.username} is online,`);
    client.user.setActivity("WORLDSTAR guild", { type: "WATCHING" });
});

client.login(process.env.token);