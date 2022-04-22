import { useDataContext } from '../contexts/dataContext';

const List: React.FC = () => {
  const { data } = useDataContext();

  return (
    <ul>
      {data.map((record) => (
        <li key={record}>{record}</li>
      ))}
    </ul>
  );
};

export default List;
