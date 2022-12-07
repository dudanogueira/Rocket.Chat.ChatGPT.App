"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBridge = void 0;
const PermissionDeniedError_1 = require("../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../managers/AppPermissionManager");
const AppPermissions_1 = require("../permissions/AppPermissions");
const BaseBridge_1 = require("./BaseBridge");
class CommandBridge extends BaseBridge_1.BaseBridge {
    doDoesCommandExist(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.doesCommandExist(command, appId);
        }
    }
    doEnableCommand(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.enableCommand(command, appId);
        }
    }
    doDisableCommand(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.disableCommand(command, appId);
        }
    }
    doModifyCommand(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.modifyCommand(command, appId);
        }
    }
    doRegisterCommand(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.registerCommand(command, appId);
        }
    }
    doUnregisterCommand(command, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.unregisterCommand(command, appId);
        }
    }
    hasDefaultPermission(appId) {
        if (AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.command.default)) {
            return true;
        }
        AppPermissionManager_1.AppPermissionManager.notifyAboutError(new PermissionDeniedError_1.PermissionDeniedError({
            appId,
            missingPermissions: [AppPermissions_1.AppPermissions.command.default],
        }));
        return false;
    }
}
exports.CommandBridge = CommandBridge;

//# sourceMappingURL=CommandBridge.js.map
