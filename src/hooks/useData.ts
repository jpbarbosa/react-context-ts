import { useState } from 'react';
import { Record } from '../entities/Record';
import { data as initialData } from '../seeds/data';

export const useData = () => {
  const [data, setData] = useState<Record[]>(initialData);

  return { data };
};
