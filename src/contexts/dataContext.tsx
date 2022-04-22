import { createContext, ReactNode, useContext } from 'react';
import { Record } from '../entities/Record';
import { useData } from '../hooks/useData';

interface DataContext {
  data: Record[];
}

const dataContext = createContext<DataContext>({
  data: [],
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const value = useData();

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useDataContext = () => useContext(dataContext);
