require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const elizabot = require("./eliza");
elizabot.start();

client.on("message", (message) => {
    if (!message.member.user.bot) {
        if (message.content.toLowerCase().includes("bot")) {
            const reply = message.content.replace("bot", "human");
            message.reply(reply);
        }
        const elizaBotMessage = elizabot.reply(message.content);
        message.reply(elizaBotMessage);
    }
});

client.login(process.env.BOT_TOKEN);
