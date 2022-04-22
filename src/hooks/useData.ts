import { useState } from 'react';
import { emptyRecord, Record } from '../entities/Record';
import { data as initialData } from '../seeds/data';

export const useData = () => {
  const [data, setData] = useState<Record[]>(initialData);
  const [active, setActive] = useState<Record>(emptyRecord);

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

  const update = (updatedRecord: Record) => {
    setData([
      ...data.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      ),
    ]);

    setActive(emptyRecord);
  };

  const remove = ({ id }: Record) => {
    setData([...data.filter((record) => record.id !== id)]);
  };

  return { data, active, setActive, create, update, remove };
};
