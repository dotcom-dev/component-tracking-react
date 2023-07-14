import React, { createContext, useContext } from 'react';
export var ContextTracking = createContext(undefined);
export var ContextWrapper = function (_a) {
    var keyValue = _a.keyValue, children = _a.children;
    var parentContext = useContext(ContextTracking);
    var context = {
        keyValue: keyValue,
        buildPath: function () {
            if (parentContext) {
                return "".concat(parentContext.buildPath(), "/").concat(keyValue);
            }
            return keyValue;
        }
    };
    return (React.createElement(ContextTracking.Provider, { value: context }, children));
};
