module.exports = {
  voteing: function(discord, client, msg, args, withoutPrefix, command) {
    if(!(args.length > 0)) return;
    var votelist = [];
    if(args[0].startsWith('"')) votelist = vote_getvotelist(withoutPrefix.slice(command.length));
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
  }
};

function vote_getvotelist(alltext) {
  return alltext.split('"').filter(function(value, index, arr){return value != " " || value != ""});
}
