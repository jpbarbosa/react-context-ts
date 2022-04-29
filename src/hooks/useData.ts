import { useEffect, useState } from 'react';
import { Record } from '../entities/Record';
import { data as seedData } from '../seeds/data';

export const useData = () => {
  const localStorageData = localStorage.getItem('data');
  const initialData = localStorageData
    ? JSON.parse(localStorageData)
    : seedData;

  const [data, setData] = useState<Record[]>(initialData);
  const [active, setActive] = useState<Record | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const create = ({ description }: Record) => {
    const maxId = Math.max(...data.map((record) => record.id || 0)) | 0;

    setData([
      ...data,
      {
        id: maxId + 1,
        description,
      },
    ]);

    setActive(undefined);
  };

  const update = (updatedRecord: Record) => {
    setData([
      ...data.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      ),
    ]);

    setActive(undefined);
  };

  const remove = ({ id }: Record) => {
    setData([...data.filter((record) => record.id !== id)]);
  };

  return { data, active, setActive, create, update, remove };
};
