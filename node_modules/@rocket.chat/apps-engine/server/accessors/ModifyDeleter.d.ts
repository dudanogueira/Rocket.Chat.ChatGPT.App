import { IModifyDeleter } from '../../definition/accessors';
import { AppBridges } from '../bridges';
export declare class ModifyDeleter implements IModifyDeleter {
    private readonly bridges;
    private readonly appId;
    constructor(bridges: AppBridges, appId: string);
    deleteRoom(roomId: string): Promise<void>;
}
