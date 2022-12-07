/// <reference types="node" />
import { IUploadRead } from '../../definition/accessors';
import { IUpload } from '../../definition/uploads';
import { UploadBridge } from '../bridges/UploadBridge';
export declare class UploadRead implements IUploadRead {
    private readonly uploadBridge;
    private readonly appId;
    constructor(uploadBridge: UploadBridge, appId: string);
    getById(id: string): Promise<IUpload>;
    getBuffer(upload: IUpload): Promise<Buffer>;
    getBufferById(id: string): Promise<Buffer>;
}
