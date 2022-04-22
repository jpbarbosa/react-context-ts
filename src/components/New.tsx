import React, { useState } from 'react';
import { useDataContext } from '../contexts/dataContext';

const New: React.FC = () => {
  const { create } = useDataContext();

  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    create({
      description,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <input type="submit" value="✓" />
    </form>
  );
};

export default New;
