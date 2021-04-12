import { useState } from 'react';

import {
  Select,
  SelectWrapper,
  SelectTrigger,
  OptionsWrapper,
  OptionsItem
} from './styles';

const FormSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectOptions = ['AM', 'PM'];
  const [selectedOption, setSelectedOption] = useState(selectOptions[0]);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleSelect = () => setIsOpen(!isOpen);

  return (
    <Select onClick={toggleSelect}>
      <SelectWrapper>
        <SelectTrigger>
          <span>{selectedOption}</span>
        </SelectTrigger>
        {isOpen ? (
          <OptionsWrapper>
            {selectOptions.map((option) => (
              <OptionsItem
                selected={option === selectedOption}
                onClick={onOptionClicked(option)}
                data-value={option.toLowerCase()}
                key={Math.random()}
              >
                <span>{option}</span>
              </OptionsItem>
            ))}
          </OptionsWrapper>
        ) : (
          ''
        )}
      </SelectWrapper>
    </Select>
  );
};

export default FormSelect;
