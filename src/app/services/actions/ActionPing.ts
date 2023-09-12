import { EmbedBuilder }     from 'discord.js'
import { ActionAbstract }   from './ActionAbstract'

export default class ActionPing extends ActionAbstract {

    action(app: any): void {
        app.client.on('messageCreate', async (message: any) => {
            if (message.content == 'ping') {
                const pingEmbed = new EmbedBuilder()
                    .setColor('#3498db')
                    .setDescription('Pinging...')

                const startTime = Date.now()
                const sentMessage = await message.channel.send({ embeds: [pingEmbed] });
                const endTime = Date.now()

                const ping = endTime - startTime
                const responseColor = ping < 500 ? '#028A0F' : '#FF2400'
                const responseEmbed = new EmbedBuilder()
                    .setColor(responseColor)
                    .setTitle('Pong!')
                    .setDescription(`Your ping is ${ping}ms.`)

                sentMessage.edit({ content: '', embeds: [responseEmbed] });
            }
        })
    }

}