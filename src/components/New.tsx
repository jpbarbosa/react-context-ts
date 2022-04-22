import React from 'react';
import { useDataContext } from '../contexts/dataContext';
import { emptyRecord } from '../entities/Record';
import Form from './Form';

const New: React.FC = () => {
  const { create } = useDataContext();

  return (
    <div>
      <span>New</span>
      <Form action={create} record={emptyRecord} />
    </div>
  );
};

export default New;
