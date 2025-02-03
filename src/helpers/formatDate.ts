import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: string): string => {
  const parsedDate = parse(date, 'dd MMMM yyyy', new Date(), { locale: ru });
  return format(parsedDate, 'dd.MM.yyyy');
};
