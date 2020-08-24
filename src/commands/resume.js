const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("ta tocando música não, esquizofrênico")
  }
  queue.dispatcher.resume();
}

module.exports = {
  name: "resume",
  help: "Depausa a música que um doente pausou",
  execute
}