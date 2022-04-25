import React, { useEffect, useRef, useState } from 'react';
import { emptyRecord, Record } from '../entities/Record';

interface FormProps {
  action: Function;
  record: Record;
}

const Form: React.FC<FormProps> = ({ action, record }) => {
  const [formState, setFormState] = useState(record);

  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    descriptionRef.current?.focus();
  }, [record]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action(formState);
    setFormState(emptyRecord);
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
        ref={descriptionRef}
      />
      <input type="submit" value="✓" />
    </form>
  );
};

export default Form;
