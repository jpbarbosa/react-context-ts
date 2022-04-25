import React from 'react';
import '../styles/index.css';
import { DataProvider } from '../contexts/dataContext';
import Header from './Header';
import List from './List';
import New from './New';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <New />
        <List />
      </DataProvider>
    </div>
  );
};

export default App;
