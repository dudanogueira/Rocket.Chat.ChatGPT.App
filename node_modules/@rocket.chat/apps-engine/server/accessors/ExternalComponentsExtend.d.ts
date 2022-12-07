import { AppExternalComponentManager } from '../managers/AppExternalComponentManager';
import { IExternalComponentsExtend } from '../../definition/accessors';
import { IExternalComponent } from '../../definition/externalComponent/IExternalComponent';
export declare class ExternalComponentsExtend implements IExternalComponentsExtend {
    private readonly manager;
    private readonly appId;
    constructor(manager: AppExternalComponentManager, appId: string);
    register(externalComponent: IExternalComponent): Promise<void>;
}
