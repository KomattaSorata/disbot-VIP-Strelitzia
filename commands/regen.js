const bcrypt = require("bcryptjs");
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
    const bcrypt_salt = await bcrypt.genSalt(12);
    const bcrypt_newIssuedHashedID = await bcrypt.hash(
      message.author.id,
      bcrypt_salt
    );

    const hitOriginal = { discord_id: message.author.id };
    const pushUpdateInfo = { hashed_id: bcrypt_newIssuedHashedID };

    const update = await User.findOneAndUpdate(hitOriginal, pushUpdateInfo, {
      returnOriginal: false,
      useFindAndModify: false,
    });

    message.channel.send({
      embed: {
        color: sysmsg.color.success,
        description: sysmsg.success_messsage.HashedIDRegenCompleted,
      },
    });
  }
};
