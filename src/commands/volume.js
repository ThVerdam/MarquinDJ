const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("ta tocando música não, esquizofrênico")
  }
  const volume = Number(args.join(" "));
  if (isNaN(volume) || volume < 0 || volume > 10) {
    return msg.reply("Não escaralha o bag, viado");
  }
  queue.dispatcher.setVolume(volume / 10);
  queue.volume = volume;
  bot.queues.set(msg.guild.id, queue);
}

module.exports = {
  name: "vol",
  help: "Ajusta o volume da música numa escala de 0 a 10, entende?",
  execute
}