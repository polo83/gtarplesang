const Discord = require("discord.js");

var PREFIX = "!";

var bot = new  Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("Gta 5 rp");
    console.log("le bot a bien ete co");
});

bot.login("NTk0NDQyMTQ4Mjg0MzM0MDgw.XRuI2w.sjlyBfvUr2cHhcs2iQNFQKq5e5Y")
