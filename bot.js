const Vec3 = require('vec3').Vec3;
const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals: { GoalBlock } } = require('mineflayer-pathfinder');
const viewer = require('prismarine-viewer').mineflayer;
const config = require('./config');

const bot = mineflayer.createBot({
  host: 'localhost',  // Your server's IP
  port: 1111,        // Your server's port
  username: 'MineBot'
});

// Load the pathfinder plugin
bot.loadPlugin(pathfinder);

bot.once('spawn', () => {
  console.log('Bot has spawned');
  // Initialize Prismarine Viewer on spawn
  viewer(bot, { firstPerson: true, port: 3007 }); // Open http://localhost:3007 to view

  navigateToHome();
});

function navigateToHome() {
  const mcData = require('minecraft-data')(bot.version); // Load Minecraft data
  const movements = new Movements(bot, mcData);          // Create movement options
  bot.pathfinder.setMovements(movements);                // Set movements for pathfinder

  // Set the goal to home coordinates
  bot.pathfinder.setGoal(new GoalBlock(config.homeLocation.x, config.homeLocation.y, config.homeLocation.z));

  bot.on('goal_reached', () => {
    bot.chat('I have arrived at home.');
  });

  bot.on('path_update', (results) => {
    if (results.status === 'noPath') {
      bot.chat('I cannot reach home, something is blocking the path.');
    }
  });
}