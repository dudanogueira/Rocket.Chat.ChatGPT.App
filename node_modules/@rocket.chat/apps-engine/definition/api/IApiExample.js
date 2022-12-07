"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
/**
 * Decorator to describe api examples
 */
function example(options) {
    return (target, propertyKey, descriptor) => {
        target.examples = target.examples || {};
        target.examples[propertyKey] = options;
    };
}
exports.example = example;

//# sourceMappingURL=IApiExample.js.map
