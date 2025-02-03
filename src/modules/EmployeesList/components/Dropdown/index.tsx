import { useState } from 'react';
import {
  FetchEmployeesUrlParams,
  Gender,
  Position,
  Stack,
} from '@modules/EmployeesList/types';
import styles from './Dropdown.module.scss';

interface DropdownProps<T> {
  filterName: string;
  selectedItems: T[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
  options: T[];
}

export const Dropdown = <T extends Position | Gender | Stack>({
  filterName,
  selectedItems,
  setFilters,
  options,
}: DropdownProps<T>) => {
  const [checkedItems, setCheckedItems] = useState<T[]>(selectedItems ?? []);

  const handleCheck = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const val = value as T;
    let newCheckedItems: T[];

    if (checked) {
      newCheckedItems = [...checkedItems, val];
      setCheckedItems(newCheckedItems);
    } else {
      newCheckedItems = checkedItems.filter((item) => item !== value);
      setCheckedItems(newCheckedItems);
    }

    setFilters((prev) => ({ ...prev, [filterName]: newCheckedItems }));
  };

  return (
    <div className={styles['wrapper']}>
      {options.map((option) => (
        <label key={option}>
          <span>{option}</span>
          <input
            type="checkbox"
            name={filterName}
            checked={checkedItems.includes(option)}
            value={option}
            onChange={handleCheck}
          />
        </label>
      ))}
    </div>
  );
};
