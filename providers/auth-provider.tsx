'use client';

import { me } from '@/lib/networking/user';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

// Create a context for the auth provider
const AuthContext = createContext<
  | {
      isAuthenticated: boolean;
      loading: boolean;
      setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

// Custom hook to access the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to check if the user is authenticated
  const checkAuthentication = () => {
    me()
      .then((data: { name: string }) => {
        if (data.name) setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Call the checkAuthentication function when the component mounts
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
