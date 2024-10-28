# Minecraft Bot Project
A Node.js bot using Mineflayer to automate tasks in a Minecraft world, including resource gathering, farming, building, and survival management. The bot is structured in a pseudo-MVC format for modularity and listens to in-game chat commands to perform actions.

## Table of Contents
Project Structure
Installation and Setup
Running the Bot
Minecraft Version and Ports
Available Commands
## Project Structure
The project structure is organized as follows:

/project-root
│
├── config.js
│
├── controller/                       # Folder for controller files
│   ├── startBotCont.js               # Startup Controller: Initializes bot, views, model entry
│   └── mainBotCont.js                # Main Controller: Manages command routing and interactions
│
├── views/                            # Folder for view components
│   ├── commandInput.js               # Handles in-game command input
│   └── messagePrinter.js             # Outputs messages to game chat and terminal
│
├── models/                           # Folder for bot’s model components (logic and subcommands)
│   ├── modelEntry.js                 # Entry point for all model interactions
│   ├── navigation.js                 # Pathfinding and navigation functions
│   └── ...                           # Other model files for specific tasks
│
└── enums/
    └── commands.js                   # Enum for available commands
## Installation and Setup
### Prerequisites
Node.js (v16 or higher)
Minecraft Server (local server on compatible version, see below)
Steps
### Install dependencies:
bash
Copy code
npm install
Configure config.js:
Set host, port, and username under server for Minecraft server details.
Define homeLocation for bot navigation.
### Minecraft Server:
Install and configure a Minecraft server running the specified version (below).
Running the Bot
Start the Minecraft Server.
### Run the Bot:
bash
node controller/startBotCont.js
Access the Viewer (optional):
If using Prismarine Viewer, open http://localhost:3007 in your browser to view the bot’s perspective.
Minecraft Version and Ports
Minecraft Version: Java Edition 1.16.5
Server Port: Set in config.js to match your Minecraft server port.
Viewer Port: Defaults to 3007 in Prismarine Viewer but can be configured.
## Available Commands 
//tbd
