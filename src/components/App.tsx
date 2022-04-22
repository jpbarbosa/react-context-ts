import React from 'react';
import '../styles/index.css';
import { DataProvider } from '../contexts/dataContext';
import List from './List';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>
          <div>React Basic CRUD</div>
          <div>With Context API And TypeScript</div>
        </h1>
      </header>
      <DataProvider>
        <List />
      </DataProvider>
    </div>
  );
};

export default App;
