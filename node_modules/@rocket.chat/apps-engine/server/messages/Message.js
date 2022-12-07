"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Room_1 = require("../rooms/Room");
class Message {
    constructor(message, manager) {
        this.manager = manager;
        Object.assign(this, message);
    }
    get room() {
        return this._ROOM;
    }
    set room(room) {
        this._ROOM = new Room_1.Room(room, this.manager);
    }
}
exports.Message = Message;

//# sourceMappingURL=Message.js.map
