import { FC, useEffect, useState } from 'react';
import { FILTER_OPTION_NAMES } from '@constants/filters';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  filterName: string;
  selectedItems: string[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
  options: string[];
}

export const Dropdown: FC<DropdownProps> = ({
  filterName,
  selectedItems,
  setFilters,
  options,
}) => {
  const [checkedItems, setCheckedItems] = useState(selectedItems ?? []);

  useEffect(() => {
    setCheckedItems(selectedItems ?? []);
  }, [selectedItems]);

  const handleCheck = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    let newCheckedItems: string[];

    if (checked) {
      newCheckedItems = [...checkedItems, value];
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
          <span>{FILTER_OPTION_NAMES[filterName][option]}</span>
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
