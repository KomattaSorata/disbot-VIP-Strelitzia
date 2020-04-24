const sysmsg = require("../core/sysmsg");
module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(process.env.BOT_COMMAND_PREFIX) !== 0) return;

  if (message.channel.type === "text") {
    message.delete();
    message
      .reply(sysmsg.error_message.sendInDM)
      .then((message) => {
        message.delete(10000);
      })
      .catch(console.error());
    return;
  }

  const args = message.content
    .slice(process.env.BOT_COMMAND_PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
