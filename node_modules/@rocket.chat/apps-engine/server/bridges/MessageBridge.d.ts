import { ITypingOptions } from '../../definition/accessors/INotifier';
import { IMessage } from '../../definition/messages';
import { IRoom } from '../../definition/rooms';
import { IUser } from '../../definition/users';
import { BaseBridge } from './BaseBridge';
export interface ITypingDescriptor extends ITypingOptions {
    isTyping: boolean;
}
export declare abstract class MessageBridge extends BaseBridge {
    doCreate(message: IMessage, appId: string): Promise<string>;
    doUpdate(message: IMessage, appId: string): Promise<void>;
    doNotifyUser(user: IUser, message: IMessage, appId: string): Promise<void>;
    doNotifyRoom(room: IRoom, message: IMessage, appId: string): Promise<void>;
    doTyping(options: ITypingDescriptor, appId: string): Promise<void>;
    doGetById(messageId: string, appId: string): Promise<IMessage>;
    protected abstract create(message: IMessage, appId: string): Promise<string>;
    protected abstract update(message: IMessage, appId: string): Promise<void>;
    protected abstract notifyUser(user: IUser, message: IMessage, appId: string): Promise<void>;
    protected abstract notifyRoom(room: IRoom, message: IMessage, appId: string): Promise<void>;
    protected abstract typing(options: ITypingDescriptor, appId: string): Promise<void>;
    protected abstract getById(messageId: string, appId: string): Promise<IMessage>;
    private hasReadPermission;
    private hasWritePermission;
}
