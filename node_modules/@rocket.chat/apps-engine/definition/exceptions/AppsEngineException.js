"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsEngineException = void 0;
/**
 * The internal exception from the framework
 *
 * It's used to signal to the outside world that
 * a _known_ exception has happened during the execution
 * of the apps.
 *
 * It's the base exception for other known classes
 * such as UserNotAllowedException, which is used
 * to inform the host that an app identified
 * that a user cannot perform some action, e.g.
 * join a room
 */
class AppsEngineException extends Error {
}
exports.AppsEngineException = AppsEngineException;

//# sourceMappingURL=AppsEngineException.js.map
