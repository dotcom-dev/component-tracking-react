"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTracking = void 0;
var react_1 = require("react");
var ContextWrapper_1 = require("./ContextWrapper");
function useTracking() {
    var context = (0, react_1.useContext)(ContextWrapper_1.ContextTracking);
    if (!context) {
        throw new Error("This hook should be used inside of the context ".concat(useTracking.name));
    }
    var track = context.track, oldParams = context.params, buildPath = context.buildPath, keyValue = context.keyValue;
    return (0, react_1.useMemo)(function () {
        return [
            function (params) {
                if (track) {
                    if (typeof params === 'function') {
                        if (oldParams)
                            return track(params(oldParams));
                    }
                    else {
                        return track(params);
                    }
                }
            },
            {
                params: oldParams,
                buildPath: buildPath,
                keyValue: keyValue
            }
        ];
    }, [track, oldParams, buildPath, keyValue]);
}
exports.useTracking = useTracking;
