import { useDataContext } from '../contexts/dataContext';
import { Record } from '../entities/Record';

interface ItemProps {
  record: Record;
}

const Item: React.FC<ItemProps> = ({ record }) => {
  const { active, setActive, remove } = useDataContext();

  return (
    <li key={record.id}>
      {active.id === record.id ? (
        <div>Active: {record.description}</div>
      ) : (
        <div>
          <button onClick={() => remove(record)}>❌</button>
          <span onClick={() => setActive(record)}>{record.description}</span>
          <span>({record.id})</span>
        </div>
      )}
    </li>
  );
};

export default Item;
