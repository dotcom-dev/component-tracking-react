import { useContext } from 'react';
import { ContextTracking } from './ContextWrapper';

export const useContextPath = () => {
  const context = useContext(ContextTracking);

  if (!context) {
    return null;
  }

  const path = context.buildPath();

  return path;
};
