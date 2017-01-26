const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on("guildMemberAdd", memeber => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`**Welcome ${member.user} to the AnimeBots official Discord Server :smile: !**`);
});

bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing One Piece Games");
  if(!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = message.content.split(" ").slice(1);

  if (command === "add") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);
  }

  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }

  if (command === "Good Morning!") {
    message.channel.sendMessage('Good Morning!');
  }

  if (command === "Good morning!") {
    message.channel.sendMessage('Good Morning!');
  }

  if (command === "Good Night!") {
    message.channel.sendMessage('Good Night!!');
  }

  if (command === "Good night!") {
    message.channel.sendMessage('Good night!');
  }

  if (command === "G2") {
      message.channel.sendMessage("*Goes Gear 2nd!*");
  }

});
bot.login(config.token);
