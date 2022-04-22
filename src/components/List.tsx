import { useDataContext } from '../contexts/dataContext';

const List: React.FC = () => {
  const { data } = useDataContext();

  return (
    <ul>
      {data.map((record) => (
        <li key={record.id}>{record.description}</li>
      ))}
    </ul>
  );
};

export default List;
