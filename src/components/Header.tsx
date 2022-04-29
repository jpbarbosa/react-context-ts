import { useDataContext } from '../contexts/dataContext';

const Header = () => {
  const { data } = useDataContext();

  return (
    <header>
      <h1>
        <div className="title">React Basic CRUD</div>
        <div className="subtitle">With Context API And TypeScript</div>
      </h1>
      <div className="counter">{data.length}</div>
    </header>
  );
};

export default Header;
