// ContextWrapper.tsx

import React, {
  createContext,
  useContext,
  ReactNode,
  createElement
} from 'react';

interface ContextWrapperProps {
  key: string;
  children: ReactNode;
}

// Create a context with a specific key
const Context = createContext<string | undefined>(undefined);

// Custom hook to access the parent context key
function useParentContextKey(): string | undefined {
  return useContext(Context);
}

// Function to build the path using parent context keys
function buildPath(parentContextKey: string | undefined, key: string): string {
  const path = parentContextKey ? `${parentContextKey}.${key}` : key;
  return path;
}

// ContextWrapper component
export function ContextWrapper({ key, children }: ContextWrapperProps) {
  const parentContextKey = useParentContextKey();

  if (!children) {
    return null;
  }

  return (
    <Context.Provider value={key}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return createElement(child.type, {
            ...child.props,
            buildPath: (childKey: string) =>
              buildPath(parentContextKey, childKey)
          });
        }
        return child;
      })}
    </Context.Provider>
  );
}

export { buildPath };
