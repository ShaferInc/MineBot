const chalk = require('chalk');

// Function to print a message to both the bot's in-game chat and the console
function print(bot, message) {
  console.log(message);
  bot.chat(message);
}

// Welcome message after bot initialization
function printWelcome(bot) {
  const message = chalk.green.bold('Bot is ready to assist! Type commands in chat.');
  print(bot, message);
}

// Arrival message when the bot reaches a destination
function printArrival(bot, location) {
  const message = chalk.blue(`Arrived at ${location}.`);
  print(bot, message);
}

// Error message when the bot encounters an issue
function printError(bot, error) {
  const message = chalk.red.bold(`Error: ${error}`);
  print(bot, message);
}

// Resource collection initiation message
function printResourceCollectionStart(bot, resource) {
  const message = chalk.yellow(`Starting to collect ${resource}...`);
  print(bot, message);
}

// Resource collection completion message
function printResourceCollectionComplete(bot, resource) {
  const message = chalk.green(`Completed collecting ${resource}.`);
  print(bot, message);
}

// Farm harvesting start message
function printFarmHarvestStart(bot) {
  const message = chalk.magenta('Beginning farm harvest routine...');
  print(bot, message);
}

// Farm harvesting completion message
function printFarmHarvestComplete(bot) {
  const message = chalk.green('Farm harvesting complete.');
  print(bot, message);
}

// Building start message
function printBuildingStart(bot, structureName) {
  const message = chalk.cyan(`Starting construction of ${structureName}...`);
  print(bot, message);
}

// Building completion message
function printBuildingComplete(bot, structureName) {
  const message = chalk.green.bold(`Finished building ${structureName}.`);
  print(bot, message);
}

// Follow command acknowledgment
function printFollowing(bot) {
  const message = chalk.blue('Following you.');
  print(bot, message);
}

// Eating status message
function printEating(bot) {
  const message = chalk.magenta('Eating food...');
  print(bot, message);
}

// Request handling message
function printRequestAcknowledgment(bot, item) {
  const message = chalk.yellow(`Acknowledged request for ${item}. Working on it.`);
  print(bot, message);
}

// AI querying message for dynamic responses
function printAIResponse(bot, response) {
  const message = chalk.gray(`AI response: ${response}`);
  print(bot, message);
}

function printLowSuppliesMessage(bot) {
  bot.chat("Supplies are low. Returning to the entrance.");
  console.log("Bot running low on supplies.");
}

function printLavaFound(bot, branch) {
  bot.chat(`Encountered lava in ${branch ? "a branch" : "the main tunnel"}. Abandoning branch.`);
  console.log("Lava detected. Bot notifying user and stopping.");
}

module.exports = {
  printWelcome,
  printArrival,
  printError,
  printResourceCollectionStart,
  printResourceCollectionComplete,
  printFarmHarvestStart,
  printFarmHarvestComplete,
  printBuildingStart,
  printBuildingComplete,
  printFollowing,
  printEating,
  printRequestAcknowledgment,
  printLowSuppliesMessage,
  printLavaFound,
  printAIResponse
};