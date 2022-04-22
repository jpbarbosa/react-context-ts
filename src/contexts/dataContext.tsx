import { createContext, ReactNode, useContext } from 'react';

interface DataContext {
  data: string[];
}

const dataContext = createContext<DataContext>({
  data: [],
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const value = {
    data: ['Item 1', 'Item 2', 'Item 3'],
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useDataContext = () => useContext(dataContext);
