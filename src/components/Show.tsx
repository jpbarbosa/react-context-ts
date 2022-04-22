import { Record } from '../entities/Record';
import { useDataContext } from '../contexts/dataContext';

interface ShowProps {
  record: Record;
}

const Show: React.FC<ShowProps> = ({ record }) => {
  const { setActive, remove } = useDataContext();

  return (
    <div>
      <button onClick={() => remove(record)}>❌</button>
      <span onClick={() => setActive(record)}>{record.description}</span>
      <span>({record.id})</span>
    </div>
  );
};

export default Show;
