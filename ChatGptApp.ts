import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { ChatGPTCommand } from './commands/GPTCommand';
import { settings } from './config/Settings';

export class ChatGptApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(new ChatGPTCommand());
        // Creating persistant app settings
        await Promise.all(settings.map((setting) => configuration.settings.provideSetting(setting)));
    }
}
