const mineflayer = require('mineflayer');
const config = require('./config');

const mainController = require('./mainBotCont');
const commandInput = require('./views/commandInput');
const messagePrinter = require('./views/messagePrinter');
const modelEntry = require('./models/modelEntry');  // Entry point to the model

// Create the bot instance
const bot = mineflayer.createBot(config.server);

// On bot spawn, initialize controllers and views
bot.once('spawn', () => {
  console.log('Bot has spawned');

  // Initialize mainController, passing in bot, views, and model entry point
  mainController.init({
    bot,
    views: {
      commandInput,
      messagePrinter
    },
    modelEntry
  });

  // Set up command listener in the commandInput view
  commandInput.listenForCommands(bot, mainController.handleCommand);
});