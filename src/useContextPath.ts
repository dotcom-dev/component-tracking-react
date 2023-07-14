import { useContext } from 'react';
import { ContextTracking } from './ContextWrapper';

export const useContextPath = () => {
  const context = useContext(ContextTracking);

  if (!context) {
    throw new Error(
      `This hook should be used inside of the context ${useContextPath.name}`
    );
  }

  const path = context.buildPath();

  return path;
};
