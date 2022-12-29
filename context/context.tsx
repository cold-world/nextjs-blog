import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type Status = 'pending' | 'success' | 'error' | null;
export type IsLoginOrSignUp = 'login' | 'signup';

interface ContextProps {
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  isLoggedIn: boolean;
  setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginOrSignUp: IsLoginOrSignUp;
  setisLoginOrSignUp: React.Dispatch<React.SetStateAction<IsLoginOrSignUp>>;
}

interface StatusProviderProps {
  children: ReactNode;
}

const StatusContext = createContext<ContextProps>({
  status: null,
  setStatus: () => {},
  isLoggedIn: false,
  setisLoggedIn: () => {},
  isLoginOrSignUp: 'login',
  setisLoginOrSignUp: () => {},
});

export const StatusProvider: React.FC<StatusProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<Status>(null);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const [isLoginOrSignUp, setisLoginOrSignUp] = useState<IsLoginOrSignUp>('login');

  useEffect(() => {
    if (status && (status === 'error' || status === 'success')) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <StatusContext.Provider
      value={{ status, setStatus, isLoggedIn, setisLoggedIn, isLoginOrSignUp, setisLoginOrSignUp }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
