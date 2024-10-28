const mineflayer = require('mineflayer');
const config = require('./config');

const mainBotCont = require('./mainBotCont');
const commandInput = require('./views/commandInput');
const messagePrinter = require('./views/messagePrinter');
const modelEntry = require('./models/modelEntry');

const bot = mineflayer.createBot(config.server);

bot.once('spawn', () => {
  console.log('Bot has spawned');

  // Initialize mainBotCont with bot, views, and model entry
  mainBotCont.init({
    bot,
    views: {
      commandInput,
      messagePrinter
    },
    modelEntry
  });

  // Initialize Prismarine Viewer on spawn
  viewer(bot, { firstPerson: true, port: 3007 }); // Open http://localhost:3007 to view

  // Set up command listener
  commandInput.listenForCommands(bot, mainBotCont.handleCommand);
});