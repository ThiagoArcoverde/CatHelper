import { REST, Routes } from 'discord.js'
import CommandTest      from '../services/commands/CommandTest'

require('dotenv').config()

export default class AppCommandsController {
    private TOKEN: string
    private CLIENT_ID: string

    public constructor() {
        if (process.env.TOKEN)
            this.TOKEN = process.env.TOKEN
        else
            throw new Error("TOKEN enviroment variable is not set.")
        if (process.env.CLIENT_ID)
            this.CLIENT_ID = process.env.CLIENT_ID
        else
            throw new Error("CLIENT_ID enviroment variable is not set.")
    }

    public async defineCommands(app: any) {
        const commands: any = []

        CommandTest.command(app)
        commands.push(CommandTest.commandInfo)

        this.loadCommands(commands)
    }

    private async loadCommands(commands: any) {
        const rest = new REST({ version: '10' }).setToken(this.TOKEN);

        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationCommands(this.CLIENT_ID), { body: commands });

            console.log('Successfully reloaded application (/) commands.');
        } catch (error: any) {
            console.error(error)
        }
    }
}