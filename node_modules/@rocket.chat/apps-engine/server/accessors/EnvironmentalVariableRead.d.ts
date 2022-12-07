import { EnvironmentalVariableBridge } from '../bridges';
import { IEnvironmentalVariableRead } from '../../definition/accessors';
export declare class EnvironmentalVariableRead implements IEnvironmentalVariableRead {
    private readonly bridge;
    private readonly appId;
    constructor(bridge: EnvironmentalVariableBridge, appId: string);
    getValueByName(envVarName: string): Promise<string>;
    isReadable(envVarName: string): Promise<boolean>;
    isSet(envVarName: string): Promise<boolean>;
}
