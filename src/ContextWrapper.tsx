import React, { createContext, useContext, ReactNode } from 'react';

interface ContextWrapperProps {
  keyValue: string;
  children: ReactNode;
}

interface ContextType {
  keyValue: string;
  buildPath: (childKey?: string) => string;
}

export const ContextTracking = createContext<ContextType | undefined>(
  undefined
);

export function ContextWrapper({ keyValue, children }: ContextWrapperProps) {
  const parentContext = useContext(ContextTracking);

  const context: ContextType = {
    keyValue,
    // TODO: check on updating this
    buildPath: childKey => {
      if (parentContext) {
        return `${parentContext.buildPath(parentContext.keyValue)}/${keyValue}`;
      }
      return keyValue;
    }
  };

  return (
    <ContextTracking.Provider value={context}>
      {children}
    </ContextTracking.Provider>
  );
}
