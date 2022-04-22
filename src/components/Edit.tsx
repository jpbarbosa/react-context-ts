import React from 'react';
import { useDataContext } from '../contexts/dataContext';
import Form from './Form';

const Edit: React.FC = () => {
  const { active, update } = useDataContext();

  return <Form action={update} record={active} />;
};

export default Edit;
