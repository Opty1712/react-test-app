import React from 'react';
import { styled } from 'linaria/react';

// кельвины - это °C плюс 273,15

function StyledInput(props) {
  const [value, setValue] = React.useState('');

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    props.handleUpdatedInput(value);
  }

  return (
    <Block>
      <Label htmlFor="calculatorInput">{props.label}</Label>
      <Input
        type="text"
        name="calculatorInput"
        value={value}
        onChange={handleInputChange}
        onUpdate={handleSubmit}
        placeholder="Введите градусы по шкале Цельсия"
        required
      />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.label`
  color: black;
  display: flex;
  align-self: center;
  padding-bottom: 10px;
`;

const Input = styled.input`
  display: flex;
  align-self: center;
  min-width: 250px;
`;

export default StyledInput;
