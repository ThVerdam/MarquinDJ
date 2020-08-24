const execute = (bot, msg, args) => {
  let string = "**COMANDOS:**\n";
  bot.commands.forEach((command) => {
    if (command.help) {
      string += `**${process.env.PREFIX}${command.name}**: ${command.help}\n`;
    }
  });

  return msg.channel.send(string);
};

module.exports = {
  name: "help",
  help: "É essa porra de comando aqui que tu usou",
  execute
};