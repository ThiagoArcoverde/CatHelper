import { ActionAbstract } from './ActionAbstract'

export default class ActionFishReact extends ActionAbstract {

    action(app: any): void {
        app.client.on('messageCreate', async (message: any) => {
            if (message.content.toUpperCase() == 'FISH REACT HIM') {
                if (message.reference != null) {
                    app.client.channels.fetch(message.reference.channelId).then((referenceChannel: any) => {
                        referenceChannel.messages.fetch(message.reference.messageId).then((referenceMessage: any) => {
                            referenceMessage.react('🐟'); referenceMessage.react('🐠'); referenceMessage.react('🎣');
                            referenceMessage.react('🐡'); referenceMessage.react('🦈'); referenceMessage.react('🐋');
                            referenceMessage.react('🐬'); referenceMessage.react('🐈')
                        }).catch((error: any) => console.log(error))
                    }).catch((error: any) => console.log(error))
                }
            }
        })
    }

}