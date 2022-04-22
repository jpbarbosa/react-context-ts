import React, { useState } from 'react';
import { Record } from '../entities/Record';

interface FormProps {
  action: Function;
  record: Record;
}

const Form: React.FC<FormProps> = ({ action, record }) => {
  const [formState, setFormState] = useState(record);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action(formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={handleChange}
      />
      <input type="submit" value="✓" />
    </form>
  );
};

export default Form;
