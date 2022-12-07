import { ICloudWorkspaceRead } from '../../definition/accessors/ICloudWorkspaceRead';
import { IWorkspaceToken } from '../../definition/cloud/IWorkspaceToken';
import { CloudWorkspaceBridge } from '../bridges/CloudWorkspaceBridge';
export declare class CloudWorkspaceRead implements ICloudWorkspaceRead {
    private readonly cloudBridge;
    private readonly appId;
    constructor(cloudBridge: CloudWorkspaceBridge, appId: string);
    getWorkspaceToken(scope: string): Promise<IWorkspaceToken>;
}
