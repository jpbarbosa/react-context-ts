import React from 'react';
import { useDataContext } from '../contexts/dataContext';
import { emptyRecord } from '../entities/Record';
import Form from './Form';

const New: React.FC = () => {
  const { active, setActive, create } = useDataContext();

  return (
    <div className="new">
      {active && active.id === undefined ? (
        <Form action={create} record={emptyRecord} />
      ) : (
        <button className="bt-new" onClick={() => setActive(emptyRecord)}>
          New Task
        </button>
      )}
    </div>
  );
};

export default New;
