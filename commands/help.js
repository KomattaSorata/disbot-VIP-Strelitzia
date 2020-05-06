const sysmsg = require("../core/sysmsg");
const User = require("../models/User");

exports.run = async (client, message, args) => {
  const ifUserInitilized = await User.findOne({
    discord_id: message.author.id,
  });
  if (!ifUserInitilized) {
    message.channel.send({
      embed: {
        color: sysmsg.color.error,
        description: sysmsg.error_message.not_initialized,
      },
    });
  } else {
    message.channel.send({
      embed: {
        color: sysmsg.color.info,
        description: sysmsg.help_message.main,
      },
    });
  }
};
