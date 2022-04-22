import { useState } from 'react';
import { Record } from '../entities/Record';
import { data as initialData } from '../seeds/data';

export const useData = () => {
  const [data, setData] = useState<Record[]>(initialData);

  const create = ({ description }: Record) => {
    const maxId = Math.max(...data.map((record) => record.id || 0)) | 0;

    setData([
      ...data,
      {
        id: maxId + 1,
        description,
      },
    ]);
  };

  const remove = ({ id }: Record) => {
    setData([...data.filter((record) => record.id !== id)]);
  };

  return { data, create, remove };
};
