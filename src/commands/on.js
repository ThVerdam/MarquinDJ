const execute = (bot, msg, args) => {
  return msg.channel.send("Pai ta on!")
}

module.exports = {
  name: "on",
  help: "Verifica se tô online, ta ligado?",
  execute
}