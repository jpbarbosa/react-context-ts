import { useDataContext } from '../contexts/dataContext';
import { Record } from '../entities/Record';
import Show from './Show';

interface ItemProps {
  record: Record;
}

const Item: React.FC<ItemProps> = ({ record }) => {
  const { active } = useDataContext();

  return (
    <li key={record.id}>
      {active.id === record.id ? (
        <div>Active: {record.description}</div>
      ) : (
        <Show record={record} />
      )}
    </li>
  );
};

export default Item;
