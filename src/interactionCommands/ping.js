const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Ping Pong!"),
  run: async ({ interaction, client }) => {
    await interaction.reply("Pong!");
  },
};