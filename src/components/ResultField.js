import React from 'react';
import { styled } from 'linaria/react';

function ResultField(props) {
  return (
    <Block>
      <Label htmlFor="result">{props.label}</Label>
      <Result type="text" name="result" value={props.value} />
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

const Result = styled.input`
  display: flex;
  align-self: center;
  min-width: 200px;
`;

export default ResultField;
