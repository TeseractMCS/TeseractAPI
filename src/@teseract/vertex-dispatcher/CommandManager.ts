export default class CommandManager {
    public static instance: CommandManager;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new CommandManager();
        }
        return this.instance;
    }

    public registerCommand(commandClass: any) {
        if (!commandClass.constructor.__commandData) {
            throw new TypeError(
                `Class: ${commandClass.constructor.name} is not a registered CommandAlias. Did you mean to pass new ${commandClass.constructor.name}() to the function argument?`,
            );
        }
        const command = commandClass.constructor.__commandData;
    }
}
