import React, { createContext, useContext, useState, ReactNode } from 'react';

type RegionType = 'Europe' | 'Asia';

interface RegionContextType {
  region: RegionType;
  setRegion: (region: RegionType) => void;
  toggleRegion: () => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [region, setRegion] = useState<RegionType>('Europe');

  const toggleRegion = () => {
    setRegion(prev => prev === 'Europe' ? 'Asia' : 'Europe');
  };

  return (
    <RegionContext.Provider value={{ region, setRegion, toggleRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};