import React from 'react';
// The styled tag allows you to create a React component
// with some styles already applied.
import { styled } from 'linaria/react';

import StyledInput from './components/StyledInput';
import ResultField from './components/ResultField';

export const Example = () => {
  const [changedValue, setChangedValue] = React.useState('');

  function handleUpdatedInput() {
    setChangedValue(
      'сюда нужно вывести измененное значение инпута плюс 273.15'
    );
  }

  return (
    <Root>
      <StyledInput label="Celsius" onUpdateInput={handleUpdatedInput} />
      <ResultField label="Kelvin" value={changedValue} />
    </Root>
  );
};

const Root = styled.div`
  background-color: green;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
