module.exports = {
  flipcoin: function(discord, client, msg, args) {
    var coin = Math.floor(Math.random()*2);
    var cointoss = "";
    if(coin == 0) cointoss = "Head"; else cointoss = "Tail";
    if(args.length > 0) {
      if(args[0].toLowerCase() == "head" || args[0].toLowerCase() == "tail") {
        if (cointoss.toLowerCase() == args[0]) msg.reply("Congratz, you won... It's " + cointoss);
        else msg.reply("Rip, you lost you loser!... It's " + cointoss);
      }
    } else msg.reply("It's " + cointoss);
  }
};
