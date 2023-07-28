import React, { ReactNode } from 'react';
type ContextWrapperPropsType = {
    keyValue?: string;
    children?: ReactNode;
    params: Record<string, unknown>;
    track<T = Record<string, unknown>>(values?: Record<string, unknown>): T | Promise<T>;
};
type ContextType = {
    keyValue?: string;
    params: Record<string, unknown>;
    buildPath: () => string;
    track<T = Record<string, unknown>>(values?: Record<string, unknown>): T | Promise<T>;
};
export declare const ContextTracking: React.Context<ContextType | undefined>;
export declare const ContextWrapper: ({ keyValue, track, params, children }: ContextWrapperPropsType) => React.JSX.Element;
export {};
