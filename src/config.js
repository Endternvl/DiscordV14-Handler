module.exports = {
  client: {
    token:
      "ODEyMjQzOTk0Mjk3ODkyODY0.GQIRff.w9eaM4PlMDzqfTHU4-QjkzNgf64V4slcGekTwY",
    id: "812243994297892864",
  },
  handler: {
    prefix: "?",
    deploy: true,
    commands: {
      prefix: true,
      slash: true,
      user: true,
      message: true,
    },
    mongodb: {
      enabled: false,
      uri: "mongodb+srv://newuser:121009@rendom.9xzp3po.mongodb.net/?retryWrites=true&w=majority&appName=Rendom",
    },
  },
  users: {
    developers: ["787842689969684480"],
  },
  development: {
    enabled: false,
    guild: "1102906097179836506",
  },
  messageSettings: {
    nsfwMessage:
      "NSFW (Not Safe For Work) command needs to be inside of a specific NSFW channel.",
    developerMessage: "You are not authorized to use this command.",
    cooldownMessage:
      "You are currently on a cooldown. Please wait ({cooldown}s).",
    globalCooldownMessage:
      "This command is currently on global cooldown. Please wait ({cooldown}s).",
    notHasPermissionMessage:
      "You do not have the permission to use this command.",
    notHasPermissionComponent:
      "You do not have the permission to use this component.",
    missingDevIDsMessage:
      "This is a developer only command, but unable to execute due to missing user IDs in configuration file.",
  },
};
