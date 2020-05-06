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
  } else if (args.length === 0) {
    message.channel.send({
      embed: {
        color: sysmsg.color.error,
        description: sysmsg.error_message.post_message_empty,
      },
    });
  } else {
    const post_message_content = args;
    const hashed_id = ifUserInitilized.hashed_id;
    const visible_hash_identifier = hashed_id.substring(hashed_id.length - 6);
    const d = new Date(message.createdTimestamp);
    const msgCreatedTime =
      d.getDate() +
      "/" +
      d.getMonth() +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();

    const generated_message = `**以下、名無しにかわりましてVIPがお送りします \nDate: ${msgCreatedTime} (GTM+9) ID: ${visible_hash_identifier}** \n${post_message_content}`;
    client.channels.cache
      .get(process.env.TARGET_CHANNEL)
      .send(generated_message);
    message.channel.send({
      embed: {
        color: sysmsg.color.success,
        description: sysmsg.success_messsage.posted,
      },
    });
  }
};
