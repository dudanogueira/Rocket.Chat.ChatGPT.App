"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const PrivateManager = Symbol('RoomPrivateManager');
class Room {
    constructor(room, manager) {
        Object.assign(this, room);
        Object.defineProperty(this, PrivateManager, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: manager,
        });
    }
    /**
     * @deprecated
     */
    get usernames() {
        // Get usernames
        if (!this._USERNAMES) {
            this._USERNAMES = this[PrivateManager].getBridges().getInternalBridge().doGetUsernamesOfRoomById(this.id);
        }
        return this._USERNAMES;
    }
    set usernames(usernames) {
        return;
    }
    get value() {
        return {
            id: this.id,
            displayName: this.displayName,
            slugifiedName: this.slugifiedName,
            type: this.type,
            creator: this.creator,
            isDefault: this.isDefault,
            isReadOnly: this.isReadOnly,
            displaySystemMessages: this.displaySystemMessages,
            messageCount: this.messageCount,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            lastModifiedAt: this.lastModifiedAt,
            customFields: this.customFields,
            userIds: this.userIds,
        };
    }
    toJSON() {
        return this.value;
    }
    toString() {
        return this.value;
    }
    valueOf() {
        return this.value;
    }
}
exports.Room = Room;

//# sourceMappingURL=Room.js.map
