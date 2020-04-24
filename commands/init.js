const bcrypt = require("bcryptjs");
const sysmsg = require("../core/sysmsg");
const User = require("../models/User");

exports.run = async (client, message, args) => {
  if (args.length === 0) {
    message.channel.send({
      embed: {
        color: sysmsg.color.info,
        title: sysmsg.informational_message.initializing_title,
        url: sysmsg.informational_message.Initializing_README_URL,
        description: sysmsg.informational_message.initializing_description,
      },
    });
  } else if (args[0] === "agree") {
    const bcrypt_salt = await bcrypt.genSalt(12);
    const bcrypt_hashed_id = await bcrypt.hash(message.author.id, bcrypt_salt);

    const user = new User({
      discord_id: message.author.id,
      hashed_id: bcrypt_hashed_id,
    });
    try {
      await user.save();
      message.channel.send({
        embed: {
          color: sysmsg.color.success,
          description: sysmsg.success_messsage.initialized,
        },
      });
    } catch (err) {
      message.channel.send({
        embed: {
          color: sysmsg.color.error,
          description: sysmsg.error_message.database_connection_error,
        },
      });
    }
  } else if (args[0] !== "agree" && args.length >= 1) {
    message.channel.send({
      embed: {
        color: sysmsg.color.warning,
        description: sysmsg.warning_message.invalid_args_commands,
      },
    });
  }
};
