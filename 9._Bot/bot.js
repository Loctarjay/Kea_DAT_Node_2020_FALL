require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
    if (message.content.toLowerCase().includes("bot")) {
        const reply = message.content.replace("bot", "human");
        message.reply(reply);
    }
});

client.login(process.env.BOT_TOKEN);
