import { ActionAbstract } from './ActionAbstract'

export default class ActionSealVideo extends ActionAbstract {

    action(app: any): void {
        app.client.on('messageCreate', async (message: any) => {
            if (message.content.toLowerCase().includes('foca') || message.content.toLowerCase().includes('seal')) {
                const videoFile = './src/assets/Seal.mp4'
                message.reply({
                    files: [videoFile]
                })
            }
        })
    }

}