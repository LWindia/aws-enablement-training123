import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RegistrationContextType {
  isRegistrationOpen: boolean;
  openRegistration: () => void;
  closeRegistration: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => setIsRegistrationOpen(true);
  const closeRegistration = () => setIsRegistrationOpen(false);

  return (
    <RegistrationContext.Provider value={{ isRegistrationOpen, openRegistration, closeRegistration }}>
      {children}
    </RegistrationContext.Provider>
  );
}; 