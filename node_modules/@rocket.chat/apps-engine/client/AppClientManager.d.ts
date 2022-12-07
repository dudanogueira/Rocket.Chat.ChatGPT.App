import { AppsEngineUIHost } from './AppsEngineUIHost';
import { AppServerCommunicator } from './AppServerCommunicator';
export declare class AppClientManager {
    private readonly appsEngineUIHost;
    private readonly communicator?;
    private apps;
    constructor(appsEngineUIHost: AppsEngineUIHost, communicator?: AppServerCommunicator);
    load(): Promise<void>;
    initialize(): Promise<void>;
}
