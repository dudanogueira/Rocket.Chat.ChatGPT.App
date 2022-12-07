import { IMessage } from '../../definition/messages';
import { AppInterface } from '../../definition/metadata';
import { IRoom } from '../../definition/rooms';
import { BaseBridge } from './BaseBridge';
export declare abstract class ListenerBridge extends BaseBridge {
    doMessageEvent(int: AppInterface, message: IMessage): Promise<void | boolean | IMessage>;
    doRoomEvent(int: AppInterface, room: IRoom): Promise<void | boolean | IRoom>;
    protected abstract messageEvent(int: AppInterface, message: IMessage): Promise<void | boolean | IMessage>;
    protected abstract roomEvent(int: AppInterface, room: IRoom): Promise<void | boolean | IRoom>;
}
