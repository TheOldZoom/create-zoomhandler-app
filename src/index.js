#!/usr/bin/env node
const { Client, GatewayIntentBits} = require("discord.js")
const path = require("path");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]})

client.prefix = "."

const { ZoomHandler } = require("zoomhandler")

new ZoomHandler({
    client,
    messageCommandsPath: path.join(__dirname, "messageCommands"),
    interactionCommandsPath: path.join(__dirname, "interactionCommands"),
    eventsPath: path.join(__dirname, "events"),
  });

client.login(require("../config.json").token)