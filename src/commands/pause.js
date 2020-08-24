const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("ta tocando música não, esquizofrênico")
  }
  queue.dispatcher.pause();
}

module.exports = {
  name: "pause",
  help: "Pausa a música que ta tocando, saca?",
  execute
}