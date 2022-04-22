import { createContext, ReactNode, useContext } from 'react';
import { emptyRecord, Record } from '../entities/Record';
import { useData } from '../hooks/useData';

interface DataContext {
  data: Record[];
  active: Record;
  setActive: Function;
  create: Function;
  remove: Function;
}

const dataContext = createContext<DataContext>({
  data: [],
  active: emptyRecord,
  setActive: () => {},
  create: () => {},
  remove: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const value = useData();

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useDataContext = () => useContext(dataContext);
