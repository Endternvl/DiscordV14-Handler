const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");
// packages
const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = process.env.GEMINI_KEY;

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Replies with Artificial Intelligence.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("What do you want to ask")
        .setRequired(true),
    ),
  options: {
    public: true,
  },
  /**
   *
   * @param {ExtendedClient} client
   * @param {import('discord.js').CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    let artificialloading = [
      "🧠 • Please wait while response is generated",
      "🧠 • Artificial Intelligence is loading",
      "🧠 • Loading response, please hold tight",
      "🧠 • Query sent to server, generating response...",
      "🧠 • Generating response (fun fact: this is one of the first command made in the bot.)",
      "🧠 • Generating response (fun fact, the generating response value is generated using `Math.random`)",
      "🧠 • Illuminating insights",
      "🧠 • Inspiring discoveries",
    ];
    let random =
      artificialloading[Math.floor(Math.random() * artificialloading.length)];

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(random)
          .setFooter({
            text: "© ServerSentinel - Skaryet | Powered by Gemini",
          })
          .setColor("Purple"),
      ],
      ephemeral: true,
    });

    const query = interaction.options.getString("query");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();

    await interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setDescription(text)
          .setFooter({
            text: "© ServerSentinel - Skaryet | Powered by Gemini",
          })
          .setColor("Purple"),
      ],
    });
  },
};
