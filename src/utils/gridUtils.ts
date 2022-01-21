import { Param } from '../types/data';

export const paramsMapper = (params: Param[]) =>
  params.map(({ name, value, date }) => ({
    name,
    value,
    date: date.toLocaleDateString(),
  }));

export const getColumns = () => [
  { key: 'name', name: 'Name' },
  { key: 'value', name: 'Value' },
  { key: 'date', name: 'Date' },
];
