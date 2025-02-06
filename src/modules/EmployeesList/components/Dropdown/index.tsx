import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import { Checkbox } from '@UI';

import { FetchEmployeesUrlParams } from '../../types';
import { FILTER_OPTION_NAMES } from '@constants/filters';
import { useClickOutside } from 'hooks/useClickOutside';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  filterTitle: string;
  filterName: string;
  selectedItems: string[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
  options: string[];
}

export const Dropdown: FC<DropdownProps> = ({
  filterTitle,
  filterName,
  selectedItems,
  setFilters,
  options,
}) => {
  const [checkedItems, setCheckedItems] = useState(selectedItems ?? []);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

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
    <div className={styles['dropdown']} ref={dropdownRef}>
      <button
        className={classNames(styles['title'], {
          [styles['opened']]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{filterTitle}</span>
        <svg viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.67174 8.04879L8.52798 1.52879C9.33769 0.758794 10.6627 0.758794 11.4724 1.52879L18.3286 8.04879"
            stroke="#155DA4"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles['options']}>
          {options.map((option) => (
            <label key={option}>
              <span>{FILTER_OPTION_NAMES[filterName][option]}</span>
              <Checkbox
                id={option}
                type="checkbox"
                name={filterName}
                checked={checkedItems.includes(option)}
                value={option}
                onChange={handleCheck}
              />
            </label>
          ))}
        </ul>
      )}
    </div>
  );
};
