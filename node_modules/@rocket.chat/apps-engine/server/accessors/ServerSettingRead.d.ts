import { ServerSettingBridge } from '../bridges/ServerSettingBridge';
import { IServerSettingRead } from '../../definition/accessors';
import { ISetting } from '../../definition/settings';
export declare class ServerSettingRead implements IServerSettingRead {
    private readonly settingBridge;
    private readonly appId;
    constructor(settingBridge: ServerSettingBridge, appId: string);
    getOneById(id: string): Promise<ISetting>;
    getValueById(id: string): Promise<any>;
    getAll(): Promise<IterableIterator<ISetting>>;
    isReadableById(id: string): Promise<boolean>;
}
