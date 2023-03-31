import { styled } from 'linaria/react';
import React, { ChangeEvent } from 'react';

const systems: Systems = {
  celsius: {
    formula: (v: number) => v + 30,
    backFormula: (v: number) => v - 30,
    text: 'Something + 30'
  },
  kelvin: { 
    formula: (v: number) => v, 
    backFormula: (v: number) => v,
    text: 'Something'
  }
};

type Systems = {
  [celsius: string]: {
    formula: (v: number) => number,
    backFormula: (v: number) => number,
    text: string
  },
  kelvin: {
    formula: (v: number) => number,
    backFormula: (v: number) => number,
    text: string
  }
};

export const Example = () => {
  const [baseTemp, setBaseTemp] = React.useState(0);

  const getOnChangeHandler = (key: keyof Systems) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const convert = systems[key];
    const newBaseTemp = convert.backFormula(Number(event.target.value));
    setBaseTemp(newBaseTemp);
  };

  return (
    <Root>
      {Object.entries(systems).map(([key, formulas]) => {
        return (
          <Item>
          <ItemP>{formulas.text}</ItemP>
          <Input
            key={key}
            value={formulas.formula(baseTemp)}
            onChange={getOnChangeHandler(key)}
          />
          </Item>
        );
      })}
    </Root>
  );
};

const Root = styled.div`
  color: #333;
  background-color: #ceb0ff;
  margin: 20% auto;
  padding: 20px;
  display: flex;
  width: fit-content;
  border-radius: 10px;
`;

const Input = styled.input`
  font-size: 17px;
  margin-right: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemP = styled.p`
  margin-top: 0;
`