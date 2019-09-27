const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

const CoinFlip = require('Modules/coinflip');
const Vote = require('Modules/vote');

client.on("message", msg => {
  if (!msg.content.startsWith("!")) return;
  var withoutPrefix = msg.content.slice(1);
  var split = withoutPrefix.split(" ");
  var command = split[0];
  var args = split.slice(1);

  switch(command) {

    // Coinflip
    case "coinflip":
      var coin = Math.floor(Math.random()*2);
      var cointoss = "";
      if(coin == 0) cointoss = "Head"; else cointoss = "Tail";
      if(args.length > 0) {
        if(args[0].toLowerCase() == "head" || args[0].toLowerCase() == "tail") {
          if (cointoss.toLowerCase() == args[0]) msg.reply("Congratz, you won... It's " + cointoss);
          else msg.reply("Rip, you lost you loser!... It's " + cointoss);
        }
      } else msg.reply("It's " + cointoss);
      break;

    // Vote
    case "vote":
      if(!(args.length > 0)) return;
      var votelist = [];
      if(vote_checkargs(args)) votelist = vote_getvotelist(withoutPrefix.slice(command.length));
      else {
        votelist.push(withoutPrefix.slice(command.length));
      }
      for(var i = 0; i < votelist.length; i++) {
        msg.channel.send(votelist[i]).then(messagetoreact => {
          messagetoreact.react("➕").then(justafterwards => {
          messagetoreact.react("➖");
          });
        }).catch(console.error);
      }
      break;
  }
});

client.login(auth.token);

///////////////
// Functions //
///////////////

function vote_checkargs(args) {
  if(args[0].startsWith('"')) return true;
  return false;
}

function vote_getvotelist(alltext) {
  return alltext.split('"').filter(function(value, index, arr){return value != " " || value != ""});
}
