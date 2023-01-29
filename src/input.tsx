import { styled } from 'linaria/react';

export const InputText = () => {
  return <Input type="text" id='input' value='text' onChange={() => {
    console.log('test')
  }}/>;
};

const Input = styled.input`
  background-color: #fff;
  color: #301a57;
  margin-top: 10px;
  width: 194px;
  border: 1px solid #c0ffc0;
  border-radius: 3px;
`;