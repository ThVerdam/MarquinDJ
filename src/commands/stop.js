const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("ta tocando música não, esquizofrênico")
  }
  queue.songs = [];
  bot.queues.set(msg.guild.id, queue);
  queue.dispatcher.end();
}

module.exports = {
  name: "stop",
  help: "Limpa a queue inteira, ninguém ouve música nessa porra",
  execute
}