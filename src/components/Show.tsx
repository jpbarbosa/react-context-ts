import { Record } from '../entities/Record';
import { useDataContext } from '../contexts/dataContext';

interface ShowProps {
  record: Record;
}

const Show: React.FC<ShowProps> = ({ record }) => {
  const { setActive, remove } = useDataContext();

  return (
    <div className="item">
      <span onClick={() => setActive(record)}>
        {record.description} ({record.id})
      </span>
      <button className="bt-remove" onClick={() => remove(record)}>
        ❌
      </button>
    </div>
  );
};

export default Show;
