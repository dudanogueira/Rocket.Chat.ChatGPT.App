import { ILivechatUpdater, IMessageBuilder, IModifyUpdater, IRoomBuilder } from '../../definition/accessors';
import { IUserUpdater } from '../../definition/accessors/IUserUpdater';
import { IUser } from '../../definition/users';
import { AppBridges } from '../bridges';
export declare class ModifyUpdater implements IModifyUpdater {
    private readonly bridges;
    private readonly appId;
    private livechatUpdater;
    private userUpdater;
    constructor(bridges: AppBridges, appId: string);
    getLivechatUpdater(): ILivechatUpdater;
    getUserUpdater(): IUserUpdater;
    message(messageId: string, updater: IUser): Promise<IMessageBuilder>;
    room(roomId: string, updater: IUser): Promise<IRoomBuilder>;
    finish(builder: IMessageBuilder | IRoomBuilder): Promise<void>;
    private _finishMessage;
    private _finishRoom;
}
