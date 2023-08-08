import { useContext, useMemo } from 'react';
import { ContextTracking } from './ContextWrapper';

export type Params = Record<string, unknown>;

export function useTracking() {
  const context = useContext(ContextTracking);
  if (!context) {
    throw new Error(
      `This hook should be used inside of the context ${useTracking.name}`
    );
  }

  const { track, params: oldParams, buildPath, keyValue } = context;
  return useMemo(() => {
    return [
      (params?: Params | ((oldParams: Params) => Params)) => {
        if (track) {
          if (typeof params === 'function') {
            if (oldParams) return track(params(oldParams));
          } else {
            return track(params);
          }
        }
      },
      {
        params: oldParams,
        buildPath,
        keyValue
      }
    ];
  }, [track, oldParams, buildPath, keyValue]);
}
