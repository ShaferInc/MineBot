const Commands = require('./enums/commands');

let bot, views, modelEntry;

function init({ bot: botInstance, views: viewObjects, modelEntry: model }) {
  bot = botInstance;
  views = viewObjects;
  modelEntry = model;

  views.messagePrinter.printMessage(bot, 'Bot is ready to receive commands.');
}

function handleCommand(command, args) {
  switch (command) {
    case Commands.NAVIGATE_HOME:
      modelEntry.navigation.navigateHome(bot);
      break;
    case Commands.COLLECT_RESOURCE:
      modelEntry.resourceCollector.collectResource(bot, args[0]);
      break;
    case Commands.FARM_HARVEST:
      modelEntry.farmManager.harvestFarms(bot);
      break;
    // Additional cases for other commands
    default:
      views.messagePrinter.printMessage(bot, "I don't understand that command.");
  }
}

module.exports = { init, handleCommand };
