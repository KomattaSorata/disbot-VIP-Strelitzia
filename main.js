const mibunshou = require('./env_config');
const Discord = require('discord.js');
const client = new Discord.Client();

// General launch seq.
const OpReadyTime = new Date();
let formatted_date = OpReadyTime.getFullYear() + "-" + (OpReadyTime.getMonth() + 1) + "-" + OpReadyTime.getDate() + " " + OpReadyTime.getHours() + ":" + OpReadyTime.getMinutes() + ":" + OpReadyTime.getSeconds()
const operationlog = `./log/${formatted_date}_operationlog.txt`;
fs.writeFile(operationlog, `Log file created @ ${OpReadyTime}`, function (err) {
      if (err) throw err;
});
console.log(`Log file created.`);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! | Strelitzia is up and running @ ${OpReadyTime}.`);
});
client.once('reconnecting', () => {
  console.log('Reconnecting!');
});
client.once('disconnect', () => {
  console.log('Disconnect!');
});

// Login
client.login(mibunshou.discord_token);