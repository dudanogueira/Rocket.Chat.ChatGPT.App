import { IApi, IApiRequest, IApiResponse } from '../../definition/api';
import { IApiEndpoint } from '../../definition/api/IApiEndpoint';
import { ProxiedApp } from '../ProxiedApp';
import { AppLogStorage } from '../storage';
import { AppAccessorManager } from './AppAccessorManager';
export declare class AppApi {
    app: ProxiedApp;
    api: IApi;
    endpoint: IApiEndpoint;
    readonly computedPath: string;
    readonly basePath: string;
    readonly appId: string;
    readonly hash?: string;
    readonly implementedMethods: Array<string>;
    constructor(app: ProxiedApp, api: IApi, endpoint: IApiEndpoint);
    runExecutor(request: IApiRequest, logStorage: AppLogStorage, accessors: AppAccessorManager): Promise<IApiResponse>;
    private validateVisibility;
    private validateSecurity;
}
