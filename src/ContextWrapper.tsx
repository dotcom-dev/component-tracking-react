import React, { createContext, useContext, ReactNode } from 'react';

type ContextWrapperPropsType = {
  keyValue?: string;
  children?: ReactNode;
  params?: Record<string, unknown>;
  track?<T = Record<string, unknown>>(
    values?: Record<string, unknown>
  ): T | Promise<T>;
};

type ContextType = {
  keyValue?: string;
  params?: Record<string, unknown>;
  buildPath: () => string;
  track?<T = Record<string, unknown>>(
    values?: Record<string, unknown>
  ): T | Promise<T>;
};

export const ContextTracking = createContext<ContextType | undefined>(
  undefined
);

export const ContextWrapper = ({
  keyValue,
  track,
  params = {},
  children
}: ContextWrapperPropsType) => {
  const {
    params: parentParams = {},
    track: parentTrack = () => {
      throw new Error('TRACKING NOT IMPLEMENTED');
    },
    ...parentContext
  } = useContext(ContextTracking) ?? {};

  const context: ContextType = {
    ...parentContext,
    params: { ...parentParams, ...params },
    track: async (params: Record<string, unknown>) => {
      if (typeof track === 'function') {
        const value = await track(params);
        if (value) {
          parentTrack(value);
        }
      }

      return parentTrack(params);
    },
    keyValue,
    buildPath: () => {
      if ('buildPath' in parentContext) {
        return keyValue
          ? `${parentContext.buildPath()}/${keyValue}`
          : parentContext.buildPath();
      }
      return keyValue ?? '';
    }
  };

  return (
    <ContextTracking.Provider value={context}>
      {children}
    </ContextTracking.Provider>
  );
};
