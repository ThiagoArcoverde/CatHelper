import { ActionAbstract } from './ActionAbstract'

export default class ActionTest extends ActionAbstract {

    action(app: any): void {
        app.client.on('messageCreate', async (message: any) => {
            if (message.content.toLowerCase() == 'teste' || message.content.toLowerCase() == 'test') {
                if (message.author.username == 'airnno') {
                    console.log(message)
                    message.reply({
                        content: 'testado com sucesso'
                    })
                }
            }
        })
    }

}