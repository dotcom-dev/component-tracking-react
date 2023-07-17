import React, { ReactNode } from 'react';
type ContextWrapperPropsType = {
    keyValue: string;
    children: ReactNode;
};
type ContextType = {
    keyValue: string;
    buildPath: () => string;
};
export declare const ContextTracking: React.Context<ContextType | undefined>;
export declare const ContextWrapper: ({ keyValue, children }: ContextWrapperPropsType) => React.JSX.Element;
export {};
