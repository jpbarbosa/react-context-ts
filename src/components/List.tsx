import { useDataContext } from '../contexts/dataContext';
import Item from './Item';

const List: React.FC = () => {
  const { data } = useDataContext();

  return (
    <div className="list">
      <ul>
        {data.map((record) => (
          <Item record={record} />
        ))}
      </ul>
    </div>
  );
};

export default List;
