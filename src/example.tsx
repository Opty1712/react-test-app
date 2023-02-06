import { styled } from 'linaria/react';

export const Example = () => {
  return (
    <Root>
      <Input />
    </Root>
  );
};

const Root = styled.div`
  color: #0ff;
  background-color: red;
  margin: 10px;
  padding: 20px;
`;
const Input = styled.input`
  font-size: 17px;
`;
