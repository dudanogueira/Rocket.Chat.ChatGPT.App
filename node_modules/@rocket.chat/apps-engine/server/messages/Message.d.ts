import { IMessage, IMessageAttachment, IMessageReactions } from '../../definition/messages';
import { IUser } from '../../definition/users';
import { AppManager } from '../AppManager';
import { Room } from '../rooms/Room';
export declare class Message implements IMessage {
    private manager;
    id?: string;
    sender: IUser;
    text?: string;
    createdAt?: Date;
    updatedAt?: Date;
    editor?: IUser;
    editedAt?: Date;
    emoji?: string;
    avatarUrl?: string;
    alias?: string;
    attachments?: Array<IMessageAttachment>;
    reactions?: IMessageReactions;
    groupable?: boolean;
    parseUrls?: boolean;
    customFields?: {
        [key: string]: any;
    };
    private _ROOM;
    get room(): Room;
    set room(room: Room);
    constructor(message: IMessage, manager: AppManager);
}
