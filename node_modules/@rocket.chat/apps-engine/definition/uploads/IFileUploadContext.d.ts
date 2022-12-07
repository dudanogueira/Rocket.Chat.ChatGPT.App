/// <reference types="node" />
import { IUploadDetails } from './IUploadDetails';
export interface IFileUploadContext {
    file: IUploadDetails;
    content: Buffer;
}
