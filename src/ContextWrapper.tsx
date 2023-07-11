import React, { createContext, useContext, ReactNode } from 'react';

type ContextWrapperPropsType = {
  keyValue: string;
  children: ReactNode;
};

type ContextType = {
  keyValue: string;
  buildPath: () => string;
};

export const ContextTracking = createContext<ContextType | undefined>(
  undefined
);

export const ContextWrapper = ({
  keyValue,
  children
}: ContextWrapperPropsType) => {
  const parentContext = useContext(ContextTracking);

  const context: ContextType = {
    keyValue,
    buildPath: () => {
      if (parentContext) {
        return `${parentContext.buildPath()}/${keyValue}`;
      }
      return keyValue;
    }
  };

  return (
    <ContextTracking.Provider value={context}>
      {children}
    </ContextTracking.Provider>
  );
};
