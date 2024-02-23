# Read me before customizing!
> This is very important.

## Basics of JavaScript
> You might want to know these first before customizing the codes
```ts
    module.exports = {
    structure: {
        name: string, // string means anything with the apostrophe
        description: string, // string means anything with the apostrophe
        aliases: string[], // this one is diffrent. Must be inside of a bracket. For example ["hello", "something here maybe"]
        permissions?: PermissionResolvable, // reuired discord permission
        cooldown?: number, // cooldown
        globalCooldown?: boolean, // boolean means true/false
        developers?: boolean,
        nsfw?: boolean
    },
    run: (client, message, args) => {} // put ur code in between the {}
};
```

# <samp>DiscordJS-V14-Bot-Template</samp>

This discord.js handler is designed to be the most straightforward and user-friendly option for beginners to learn. Despite the absence of any youtube tutorials for this, it is highly recommended to review each line of code included in this project.

## Features
- [discord.js v14.x](https://github.com/discordjs/discord.js/releases).
- Supports all possible type of commands.
    - Message commands (AKA: Prefix commands).
    - Application commands:
        - Chat Input
        - User context
        - Message context
- Components Handler.
    - Buttons
    - Select menus
    - Modals
    - Autocomplete
- Easy and simple to use.

## Structures

This Discord bot template uses CommonJS modules. You cannot use `import`, `export`, or any related keywords from the ES6 modules. You might want to find out more about CommonJS and ES6 Modules.


### Message command structure:
```ts
module.exports = {
    structure: {
        name: string,
        description: string,
        aliases: string[],
        permissions?: PermissionResolvable,
        cooldown?: number,
        globalCooldown?: boolean,
        developers?: boolean,
        nsfw?: boolean
    },
    run: (client, message, args) => {}
};
```

### Slash Application command structure:
```ts
module.exports = {
    structure: SlashCommandBuilder | ContextMenuCommandBuilder,
    options?: {
        cooldown?: number,
        globalCooldown?: boolean,
        developers?: boolean,
        nsfw?: boolean
    },
    run: (client, interaction) => {}
};
```

### Event listener:

The `...args` is a spread operator of arguments from the event chosen. For an example, if the event is **'messageCreate'**, the first argument is going to be type of **Message**.

```ts
module.exports = {
    event: string,
    once?: boolean,
    run: (client, ...args) => {}
};
```

### Components:

The `interaction` is the interaction of the component. For an example, if the custom ID is from a button, the interaction is type of ButtonInteraction.

```ts
module.exports = {
    customId: string,
    options?: {
        public?: boolean
    },
    run: (client, interaction) => {}
};
```

## Requirements
### NPM Packages:
- **chalk** v2.4.2
- **discord.js** v^14.13.0
- **dotenv** v^latest
- **mongoose** v^latest

> [!WARNING]
> Installing any version from the package `chalk` that is over **v2.4.2** will throw an error that you must enable ES6 modules, while this handler uses CommonJS modules. You might wan't to find out how to do so.

### Platforms:
- **Node.js** v16.9.0 or newer

## Setup
1. Install Visual Studio Code.
2. Clone this repository.
3. Extract the `.zip` file into a normal folder.
4. Open VSCode, click on **Open Folder**, and select the new created folder.
5. Go to folder `src/` and rename `example.config.js` to `config.js` and fill all the required values. You can use `.env` instead of `config.js` to keep your bot token and ID, and your MongoDB URI in a secured place by renaming the file `.env.example` to `.env` and filling all required values.

> [!CAUTION]
> Disclosing or providing your Discord bot token would grant unauthorized access to your Discord bot application, enabling individuals to log in and potentially gain control over it. The same applies to sharing your MongoDB URI.

6. Initialize a new npm package:

```
npm init -y
```

7. Install all [required packages](#packages):

```
npm install chalk@2.4.2 discord.js@latest dotenv mongoose
```

8. To start your project, run `node .` or `npm run start`.
> The execution of all these tasks (installing packages and running projects) can be performed on the Terminal of Visual Studio Code.

<!--
## Hosting (<img src="https://media.discordapp.net/attachments/1111644651036876822/1124045180484472882/discloud_white_horizon-e96efbfa.png?width=960&height=163" width=100>)
Use [Discloud](https://discloudbot.com/)! A trust-worthy Discord bot hosting service.

1. Login using your Discord/GitHub account, and then don't close the Dashboard tab (because we need it later).
2. Go to your project on VSCode, create a new file `discloud.config`. This file is a configuration file for Discloud apps servers. The `discloud.config` file content must be like the codeblock below, and remember to change **YOUR_BOT_ID** to your actual bot ID.

```apache
ID = YOUR_BOT_ID
TYPE = bot
MAIN = src/index.js
RAM = 100
AUTORESTART = true
VERSION = latest
API = tools
```

3. Open explorer and navigate using the path of your project. Hold the **CTRL** key, and click on `src/`, `package.json`, and `discloud.config`. Now release the key, and right click on the selected files/folders and click on **Convert into .zip file**.
4. Go back to the Discloud dashboard, click on **Add App**, and then upload the .zip file in the upload box. Make sure to accept the ToS of the service and then click on **Upload**.
5. Wait for at least 20 seconds (depends on your Internet speed), and then your bot should be on.

> **Warning**
> Discloud has recently made every Free plan servers into **15 days** hosting only. Use the command `.rw` from their bot in the commands channel (on their Discord server) to reset the timer. Join the server: [Click here!](https://discord.gg/discloud-584490943034425391)

-->

## Command options
The command options, each property is optional, which means it's allowed to provide an `undefined` value to one of these properties below.

- `permissions` (**PermissionFlagsBits** | **string**): The required permissions for the command, available to message commands only.
- `cooldown` (**number**): The cooldown of the command, in milliseconds.
- `globalCooldown` (**boolean**): Determines whether the cooldown is global or not.
- `developers` (**boolean**): Determines whether the command is executable only to the developers of the bot.
- `nsfw` (**boolean**): Determines whether this command is executable only in NSFW channels.

## Component options
The component options, each property is optional which means it's allowed to provide an `undefined` value to one of these properties below.

- `public` (**boolean**): If set to true, the component will be available to everyone (default), if set to false, the component will be available to the component owner (original interaction user) only.

## FAQs
### 1. I'm getting this error: "Unable to load application commands to Discord API"
- The bot token and/or bot ID are invalid.
- The bot token and bot ID are not from the same Discord bot.
- Too many application commands.
    - 100 Global Chat input (AKA: Slash) commands.
    - 5 Global User context commands.
    - 5 Global Message context commands.
- Invalid application command structure.
    - Missing description, type, or any required properties for a command.
    - The command cannot be modified.
- The Discord API has an issue ([Verify Discord status](https://discordstatus.com/)).

[Learn more...](https://discord.com/developers/docs/interactions/application-commands#registering-a-command)

### 2. I'm unable to view any application commands, no errors in console?
This is a common problem for developers, to fix this issue, restart the Discord app or go in a different text channel.

### 3. Is MongoDB required?
No, MongoDB is not required. There is an option to disable it in `config.js` so you will avoid errors from the commands that requires the database, such as `?prefix`. If you want to use the database, visit [MongoDB website](https://www.mongodb.com/).

## Contributors
Thank you for TFAGaming for giving me this handler. This handler would be simplified and easier to understand for no experience coder.
