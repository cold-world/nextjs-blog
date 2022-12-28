import React, { createContext, useState, useEffect, ReactNode } from 'react';
export type Status = 'pending' | 'success' | 'error' | null;

interface ContextProps {
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
}

interface StatusProviderProps {
  children: ReactNode;
}

const StatusContext = createContext<ContextProps>({
  status: null,
  setStatus: () => {},
});

export const StatusProvider: React.FC<StatusProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    if (status && (status === 'error' || status === 'success')) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return <StatusContext.Provider value={{ status, setStatus }}>{children}</StatusContext.Provider>;
};

export default StatusContext;
