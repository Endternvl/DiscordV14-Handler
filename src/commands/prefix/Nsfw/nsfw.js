const { Message } = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");
// hey what are u doing here? this is just an example command ad would only return "nsfw command".
module.exports = {
  structure: {
    name: "nsfw",
    description: "Nsfw Command",
    aliases: ["ns"],
    permissions: "SendMessages",
    cooldown: 5000,
    nsfw: true,
  },
  /**
   * @param {ExtendedClient} client
   * @param {Message<true>} message
   * @param {string[]} args
   */
  run: async (client, message, args) => {
    await message.reply({
      content: "NSFW Command",
    });
  },
};
