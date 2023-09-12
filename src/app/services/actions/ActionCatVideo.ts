import { ActionAbstract } from './ActionAbstract'

export default class ActionCatVideo extends ActionAbstract {

    action(app: any): void {
        app.client.on('messageCreate', async (message: any) => {
            if (message.content.toLowerCase().includes('gato') || message.content.toLowerCase().includes('cat')) {
                const videoFile = './src/assets/Hardware_store.mp4'
                message.reply({
                    files: [videoFile]
                })
            }
        })
    }

}