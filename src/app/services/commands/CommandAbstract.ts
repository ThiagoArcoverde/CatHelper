export abstract class CommandAbstract {

    abstract commandInfo: {
        name:        string
        description: string
    }

    abstract command(app: any): void
}