import { AppManager } from '../AppManager';
import { IMarketplaceInfo } from '../marketplace';
import { AppLicenseValidationResult } from '../marketplace/license';
export declare class AppLicenseManager {
    private readonly manager;
    private readonly crypto;
    private readonly userBridge;
    constructor(manager: AppManager);
    validate(validationResult: AppLicenseValidationResult, appMarketplaceInfo?: IMarketplaceInfo): Promise<void>;
    private validateV1;
}
