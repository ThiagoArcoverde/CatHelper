import { CommandAbstract } from './CommandAbstract'

export default new class CommandTest extends CommandAbstract {
    commandInfo = {
        name: 'test',
        description: 'Test command'
    }

    command(app: any): void {
        app.client.on('interactionCreate', async (interaction: any) => {
            if (!interaction.isChatInputCommand())
                return

            if (interaction.commandName.toLowerCase() === 'test') {
                console.log(interaction)
                await interaction.reply('Hello world!')
            }
        })
    }

}