import { createContext, useState } from 'react';

interface IProps {}

const initialValue = {
  isSmartImportMode: false,
  toggleMode: () => {}
};

export const SmartModeContext = createContext(initialValue);

const SmartModeContextProvider: React.FC<IProps> = ({ children }) => {
  const [isSmartImportMode, setIsSmartImportMode] = useState(false);
  const toggleMode = () => setIsSmartImportMode(p => !p);

  const value = {
    isSmartImportMode,
    toggleMode
  };

  return (
    <SmartModeContext.Provider value={value}>
      {children}
    </SmartModeContext.Provider>
  );
};

export default SmartModeContextProvider;
