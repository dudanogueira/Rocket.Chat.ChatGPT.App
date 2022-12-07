"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBridge = void 0;
const PermissionDeniedError_1 = require("../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../managers/AppPermissionManager");
const AppPermissions_1 = require("../permissions/AppPermissions");
const BaseBridge_1 = require("./BaseBridge");
class ApiBridge extends BaseBridge_1.BaseBridge {
    doRegisterApi(api, appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.registerApi(api, appId);
        }
    }
    doUnregisterApis(appId) {
        if (this.hasDefaultPermission(appId)) {
            return this.unregisterApis(appId);
        }
    }
    hasDefaultPermission(appId) {
        if (AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.apis.default)) {
            return true;
        }
        AppPermissionManager_1.AppPermissionManager.notifyAboutError(new PermissionDeniedError_1.PermissionDeniedError({
            appId,
            missingPermissions: [AppPermissions_1.AppPermissions.apis.default],
        }));
        return false;
    }
}
exports.ApiBridge = ApiBridge;

//# sourceMappingURL=ApiBridge.js.map
