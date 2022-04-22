import { useDataContext } from '../contexts/dataContext';
import { Record } from '../entities/Record';

interface ItemProps {
  record: Record;
}

const Item: React.FC<ItemProps> = ({ record }) => {
  const { remove } = useDataContext();

  return (
    <li key={record.id}>
      <button onClick={() => remove(record)}>❌</button>
      <span>{record.description}</span>
      <span>({record.id})</span>
    </li>
  );
};

export default Item;
