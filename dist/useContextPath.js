import { useContext } from 'react';
import { ContextTracking } from './ContextWrapper';
export var useContextPath = function () {
    var context = useContext(ContextTracking);
    if (!context) {
        throw new Error("This hook should be used inside of the context ".concat(useContextPath.name));
    }
    var path = context.buildPath();
    return path;
};
