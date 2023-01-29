import { styled } from 'linaria/react';
import { InputText } from './input';
import { LabelForInput } from './lable'
import { ResultInCelsius } from './resultInCelsius'
import { ChangeButton } from './button'

export const Example = () => {
  return (
  <Root>
    <LabelForInput />
    <InputText /> 
    <ChangeButton />
    <ResultInCelsius />
  </Root>
  );
};

const Root = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 0.8em;
  background-color: #84cdfa;
  padding: 20px;
  box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 200px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;