module.exports = {
    data: {
      name: "ping",
      description: "Ping! Pong!",
    },
    run: async ({ message, args, client }) => {
      message.channel.send("Pong!");
    },
  };