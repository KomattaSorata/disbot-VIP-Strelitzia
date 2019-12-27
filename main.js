const mibunshou = require('./env_config');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const hash = require('object-hash');

// General launch seq.
const OpReadyTime = new Date();
let formatted_date = OpReadyTime.getFullYear() + "-" + (OpReadyTime.getMonth() + 1) + "-" + OpReadyTime.getDate() + "_" + OpReadyTime.getHours() + ":" + OpReadyTime.getMinutes();
const operationlog = `./log/${formatted_date}_operationlog.txt`;
// fs.writeFile(operationlog, `Log file created @ ${OpReadyTime}`, function (err) {
//      if (err) throw err;
// });
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

// Main
client.on('message', msg => {
  if (msg.content.startsWith("!5ch") === true) {
    if (msg.channel.type === "dm"){
      const guild = client.guilds.get(mibunshou.kb13_serverid);
      if (guild.member(msg.author.id)) {
        const hashid = hash.MD5(msg.author.id);
        var d = new Date(msg.createdTimestamp);
        msgCreatedTime = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
        const postcontent = `**以下、名無しにかわりましてVIPがお送りします Date: ${msgCreatedTime} (GTM+9) ID:${hashid.substr(hashid.length - 6, hashid.length)}**\n${msg.content.substring(5)}`;
        client.channels.get(mibunshou.kb13_channelid).send(postcontent);
        msg.reply(`発送しました！ \n Your message is posted.`);
      }else{
        msg.reply(`発送できません！あなたは目標サーバーのメンバーではありません\nFailed to post message. You are not a member of the targetted server.`);
      }
    } else {
      msg.delete();
      msg.reply(`#5chにポストしたいの場合は私にDMしてください！\nPlease DM me is you would like to post on #5ch.`).then(msg => {msg.delete(10000)}).catch(console.error());
    }
  }
});

// Login
client.login(mibunshou.discord_token);