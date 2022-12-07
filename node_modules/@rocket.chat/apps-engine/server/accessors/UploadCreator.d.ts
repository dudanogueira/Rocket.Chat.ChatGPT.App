/// <reference types="node" />
import { IUploadCreator } from '../../definition/accessors';
import { IUpload } from '../../definition/uploads';
import { IUploadDescriptor } from '../../definition/uploads/IUploadDescriptor';
import { AppBridges } from '../bridges';
export declare class UploadCreator implements IUploadCreator {
    private readonly bridges;
    private readonly appId;
    constructor(bridges: AppBridges, appId: string);
    uploadBuffer(buffer: Buffer, descriptor: IUploadDescriptor): Promise<IUpload>;
}
