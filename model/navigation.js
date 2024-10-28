const { Movements, goals: { GoalBlock } } = require('mineflayer-pathfinder');
const config = require('../config');

function navigateToHome(bot) {
  const mcData = require('minecraft-data')(bot.version);
  const movements = new Movements(bot, mcData);

  bot.pathfinder.setMovements(movements);
  bot.pathfinder.setGoal(new GoalBlock(config.homeLocation.x, config.homeLocation.y, config.homeLocation.z));

  bot.once('goal_reached', () => {
    bot.chat('I have arrived at home.');
  });

  bot.on('path_update', (results) => {
    if (results.status === 'noPath') {
      bot.chat('I cannot reach home; something is blocking the path.');
    }
  });
}

module.exports = { navigateToHome };