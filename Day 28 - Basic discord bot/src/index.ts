import Discord from "discord.js";

const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION"],
});

const botToken = process.env.BOT_TOKEN;
const PREFIX = "$";

client.login(botToken);

client.on("ready", () => {
  console.log(`${client.user ? client.user.tag : "Unknown"} has joined.`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "random") {
      message.reply(
        "Here is the random you're looking for: " +
          Math.round(Math.random() * 100)
      );
    } else if (CMD_NAME === "kick") {
      if (!message.member?.hasPermission("KICK_MEMBERS")) {
        return message.reply("You do not have permissions to do this.");
      }
      if (args.length === 0) return message.reply("Please provide an ID.");

      const member = message.guild?.members.cache.get(args[0]);

      if (!member) return message.reply("Unable to find this member.");

      member
        .kick()
        .then((member) =>
          message.channel.send(`${member.user.tag} was kicked ;D`)
        )
        .catch(() => {
          message.reply(`${member.user.tag} is too strong, can't kick him ;c`);
        });
    } else if (CMD_NAME === "ban") {
      if (!message.member?.hasPermission("KICK_MEMBERS")) {
        return message.reply("You do not have permissions to do this.");
      }
      if (args.length === 0) return message.reply("Please provide an ID.");

      try {
        const user = await message.guild?.members.ban(args[0]);

        message.channel.send("User was banned.");

        console.log(user);
      } catch (err) {
        console.log(err);
        message.channel.send("An error occurred or the user was not found.");
      }
    }
  }
});

type AvailableReactions = "🍎" | "🍌";

let rolesMap = {
  "🍎": "749329578069328022",
  "🍌": "749329592451465320",
};

client.on("messageReactionAdd", (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild?.members.cache.get(user.id);

  if (reaction.message.id === "749329895750107246") {
    if (!Object.keys(rolesMap).includes(name)) return;
    const validName = name as AvailableReactions;

    if (member) {
      member.roles.add(rolesMap[validName]);
    }
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild?.members.cache.get(user.id);

  if (reaction.message.id === "749329895750107246") {
    if (!Object.keys(rolesMap).includes(name)) return;
    const validName = name as AvailableReactions;

    if (member) {
      member.roles.remove(rolesMap[validName]);
    }
  }
});
