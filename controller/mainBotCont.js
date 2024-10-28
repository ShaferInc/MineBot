const Commands = require('./enums/commands');
let bot, views, modelEntry;

function init({ bot: botInstance, views: viewObjects, modelEntry: model }) {
  bot = botInstance;
  views = viewObjects;
  modelEntry = model;

  // Print a welcome message and navigate to home on bot spawn
  views.messagePrinter.printWelcome(bot);
  modelEntry.navigation.navigateToHome(bot);
}

function handleCommand(command, args) {
  switch (command) {
    case Commands.NAVIGATE_HOME:
      modelEntry.navigation.navigateToHome(bot);
      break;
    case Commands.COLLECT_RESOURCE:
      modelEntry.resourceCollector.collectResource(bot, args[0]);
      break;
    case Commands.FARM_HARVEST:
      modelEntry.farmManager.harvestFarms(bot);
      break;
    // Additional cases for other commands
    default:
      views.messagePrinter.printError(bot, "I don't understand that command.");
  }
}

module.exports = { init, handleCommand };