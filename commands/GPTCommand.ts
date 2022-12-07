import {
    IHttp,
    IModify,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { ChatGPTAPI } from 'chatgpt'

import {
    ISlashCommand,
    SlashCommandContext,
} from '@rocket.chat/apps-engine/definition/slashcommands';
import { AppSetting } from '../config/Settings';

export class ChatGPTCommand implements ISlashCommand {
    public command = 'chatgpt'; // here is where you define the command name,
    // users will need to run /phone to trigger this command
    public i18nDescription = 'ChatGPT_Command_Description';
    public i18nParamsExample = 'ChatGPT_Command_Example';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): Promise<void> {
        // if the first argument is config
        const text = context.getArguments().join(" ")
        const question = `**You asked**: ${text}`;
        const { value: GlobalToken } = await read.getEnvironmentReader().getSettings().getById(AppSetting.ChatGPTGlobalToken);
        const { value: HowToPresent } = await read.getEnvironmentReader().getSettings().getById(AppSetting.ChatGPTAction);

        const sender = context.getSender(); // get the sender from context
        const room = context.getRoom(); // get the rom from context
        const messageStructure = modify.getCreator().startMessage().setRoom(room);

        if(!GlobalToken){
            // TODO: Allow to config a token for the user if no GlobalToken
            const block = modify.getCreator().getBlockBuilder();
            block.addSectionBlock({
                text: block.newMarkdownTextObject('Sorry! No ChatGPT Token found.'),
            });
            messageStructure.setBlocks(block);
            await modify.getNotifier().notifyUser(sender, messageStructure.getMessage())
            return
        }

        const api = new ChatGPTAPI({ sessionToken: GlobalToken })
        await api.ensureAuth()
        const response = await api.sendMessage(
            //'Write a python version of bubble sort. Do not include example usage.'
            text
          ).then( 
            response =>{ 
                const answer = `**This is the answer**:\n ${response}`
                console.log(answer)
                if (HowToPresent == "notification"){    
                    // lets build a really simple block (more on that on other Commands)
                    const block = modify.getCreator().getBlockBuilder();
                    // we want this block to have a Text supporting MarkDown
                    block.addSectionBlock({
                        text: block.newMarkdownTextObject(question),
                    });
                    block.addSectionBlock({
                        text: block.newMarkdownTextObject(answer),
                    });
                    // now let's set the blocks in our message
                    messageStructure.setBlocks(block);
                    // and finally, notify the user with the IMessage
                    modify.getNotifier().notifyUser(sender, messageStructure.getMessage())
                }else{
                    const messageStructure = modify.getCreator().startMessage();
                    const sender = context.getSender(); // get the sender from context
                    const room = context.getRoom(); // get the rom from context
            
                    const message = `${question} ${answer}`
        
                    messageStructure
                    .setSender(sender)
                    .setRoom(room)
                    .setText(message); // set the text message
            
                    modify.getCreator().finish(messageStructure); // sends the message in the room.
                }
            } 
            ).catch(
                error => { console.log("AQUI ERROU!!!", error)}
            )

    }

}