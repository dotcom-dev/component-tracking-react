"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextPath = void 0;
var react_1 = require("react");
var ContextWrapper_1 = require("./ContextWrapper");
var useContextPath = function () {
    var context = (0, react_1.useContext)(ContextWrapper_1.ContextTracking);
    if (!context) {
        throw new Error("This hook should be used inside of the context ".concat(exports.useContextPath.name));
    }
    var path = context.buildPath();
    return path;
};
exports.useContextPath = useContextPath;
