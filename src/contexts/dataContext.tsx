import { createContext, ReactNode, useContext } from 'react';
import { Record } from '../entities/Record';
import { useData } from '../hooks/useData';

interface DataContextInterface {
  data: Record[];
  active?: Record;
  setActive: Function;
  create: Function;
  update: Function;
  remove: Function;
}

const DataContext = createContext<DataContextInterface>({
  data: [],
  setActive: () => {},
  create: () => {},
  update: () => {},
  remove: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const value = useData();

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
