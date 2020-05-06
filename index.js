const dotenv = require("dotenv");
const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(
  process.env.DB_ACCESS_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected.");
  }
);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.DISCORD_TOKEN);
