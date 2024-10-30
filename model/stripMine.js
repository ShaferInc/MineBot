// models/stripMine.js
const Vec3 = require('vec3').Vec3;
const { GoalBlock } = require('mineflayer-pathfinder');
const config = require('../config');

function navigateToMineEntrance(bot) {
  bot.pathfinder.setGoal(new GoalBlock(config.mineEntrance.x, config.mineEntrance.y, config.mineEntrance.z));
}

function startMiningMainTunnel(bot) {
  const tunnelWidth = 2;
  const tunnelHeight = 3;
  const branchOffset = 3;

  for (let branchCount = 0; branchCount < Infinity; branchCount++) {
    const mainTunnelLength = branchCount * branchOffset;
    mineArea(bot, tunnelWidth, tunnelHeight, mainTunnelLength); // Extend tunnel for each branch
    placeTorch(bot, mainTunnelLength); // Place torches in the main tunnel

    if (!checkInventory(bot)) returnToEntrance(bot); // Check for low supplies
    if (mineBranch(bot, branchCount % 2 === 0 ? 'left' : 'right', mainTunnelLength) === 'stop') break;
  }
}

function mineBranch(bot, side, tunnelLength) {
  const branchLength = 150;
  const branchDirection = side === 'left' ? new Vec3(-1, 0, 0) : new Vec3(1, 0, 0);
  const branchStart = bot.entity.position.offset(branchDirection.x * (tunnelLength + 3), 0, 0);

  for (let i = 0; i < branchLength; i++) {
    const blockPos = branchStart.offset(branchDirection.x * i, 0, 0);
    const block = bot.blockAt(blockPos);

    if (config.targetBlocks.includes(block.name)) bot.dig(block); // Collect target blocks
    placeTorch(bot, i); // Place torches periodically

    if (!checkInventory(bot)) return 'stop';
    if (block.name === 'lava' || block.name === 'water') {
      bot.chat(`Encountered ${block.name} in ${side} branch. Stopping branch.`);
      return 'stop';
    }
  }
  return 'continue';
}

function placeTorch(bot, position) {
  if (position % 10 === 0) {
    bot.equip('torch');
    bot.placeBlock(bot.blockAtCursor(), new Vec3(0, 1, 0));
  }
}

function checkInventory(bot) {
  const hasPickaxe = bot.inventory.items().some(item => item.name.includes('pickaxe'));
  const hasTorches = bot.inventory.items().some(item => item.name === 'torch');
  const hasFood = bot.food > 10;

  if (!hasPickaxe) requestItem(bot, 'pickaxe');
  if (!hasTorches) requestItem(bot, 'torch');
  if (!hasFood) requestItem(bot, 'food');

  return hasPickaxe && hasTorches && hasFood;
}

function requestItem(bot, item) {
  bot.chat(`I'm out of ${item}. Please supply more.`);
}

function returnToEntrance(bot) {
  bot.chat("Returning to the mine entrance due to low supplies.");
  navigateToMineEntrance(bot);
}

module.exports = { navigateToMineEntrance, startMiningMainTunnel, mineBranch, checkInventory };
