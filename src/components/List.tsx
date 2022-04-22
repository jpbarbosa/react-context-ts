import { useDataContext } from '../contexts/dataContext';
import Item from './Item';

const List: React.FC = () => {
  const { data } = useDataContext();

  return (
    <ul>
      {data.map((record) => (
        <Item record={record} />
      ))}
    </ul>
  );
};

export default List;
