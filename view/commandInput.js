const Commands = require('../enums/commands');

function listenForCommands(bot, handleCommand) {
  bot.on('chat', (username, message) => {
    const [command, ...args] = message.split(' ');
    handleCommand(command.toLowerCase(), args);
  });
}

module.exports = { listenForCommands };