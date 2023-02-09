import { styled } from 'linaria/react';
import React, { ChangeEvent } from 'react';

const systems: Systems = {
  celsius: {
    formula: (v: number) => v + 30,
    backFormula: (v: number) => v - 30
  },
  kelvin: { formula: (v: number) => v, backFormula: (v: number) => v }
};

type Systems = {
  celsius: (v: number) => number;
  kelvin: (v: number) => number;
};

export const Example = () => {
  const [baseTemp, setBaseTemp] = React.useState(0);

  const getOnChangeHandler = (key: keyof Systems) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const convert = systems[key];
    const newBaseTemp = convert.backFormula(event.target.value);
    setBaseTemp(newBaseTemp);
  };

  return (
    <Root>
      {Object.entries(systems).map(([key, formulas]) => {
        return (
          <Input
            key={key}
            value={formulas.formula(baseTemp)}
            onChange={getOnChangeHandler(key)}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.div`
  color: #0ff;
  background-color: red;
  margin: 10px;
  padding: 20px;
  display: flex;
`;
const Input = styled.input`
  font-size: 17px;
`;
