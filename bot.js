const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

const CoinFlip = require('./Modules/Coinflip.js');
const Vote = require('./Modules/Vote.js');

client.on("message", msg => {
  if (!msg.content.startsWith("!")) return;
  var withoutPrefix = msg.content.slice(1);
  var split = withoutPrefix.split(" ");
  var command = split[0];
  var args = split.slice(1);

  switch(command) {

    // Coinflip
    case "coinflip":
      CoinFlip.flipcoin(Discord, client, msg, args);
      break;

    // Vote
    case "vote":
      Vote.voteing(Discord, client, msg, args, withoutPrefix, command);
      break;
  }
});

client.login(auth.token);
