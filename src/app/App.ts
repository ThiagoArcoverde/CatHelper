import { Client, GatewayIntentBits }    from 'discord.js'
import AppCommandsController            from './controllers/AppCommandsController'
import AppActionsController             from './controllers/AppActionsController'
require('dotenv').config()

class App {
    private client: any

    constructor() {
        this.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
        this.client.login(process.env.TOKEN)

        new AppCommandsController().defineCommands(this)
        new AppActionsController().defineActions(this)

        this.client.on('ready', () => {
            console.log("The bot is ready!")
        })
    }
}

new App()

