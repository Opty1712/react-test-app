import { styled } from 'linaria/react'
import React, { ChangeEvent } from 'react'

const returnVOnly = (v: number) => v

const systems: Systems = {
  celsius: {
    formula: returnVOnly,
    backFormula: returnVOnly,
    text: 'Something',
  },
  kelvin: {
    formula: (v: number) => v * 2,
    backFormula: (v: number) => v / 2,
    text: 'Something * 2',
  },
}

type TypeOfFormula = (v: number) => number

type Systems = {
  [celsius: string]: {
    formula: TypeOfFormula
    backFormula: TypeOfFormula
    text: string
  }
  kelvin: {
    formula: TypeOfFormula
    backFormula: TypeOfFormula
    text: string
  }
}

export const Example = () => {
  const [baseTemp, setBaseTemp] = React.useState(0)

  const getOnChangeHandler = (key: keyof Systems) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const convert = systems[key]
    const newBaseTemp = convert.backFormula(Number(event.target.value))
    setBaseTemp(newBaseTemp)
  }

  return (
    <Root>
      {Object.entries(systems).map(([key, formulas]) => {
        return (
          <Item key={key}>
            <ItemP>{formulas.text}</ItemP>
            <Input
              value={formulas.formula(baseTemp)}
              onChange={getOnChangeHandler(key)}
            />
          </Item>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  color: #333;
  background-color: #ceb0ff;
  margin: 20% auto;
  padding: 20px;
  display: flex;
  width: fit-content;
  border-radius: 10px;
`

const Input = styled.input`
  font-size: 17px;
  margin-right: 20px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemP = styled.p`
  margin-top: 0;
`
