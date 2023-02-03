import { styled } from 'linaria/react';
import React, { useEffect, useState } from 'react';

export const Example = () => {
  return (
    <Root>
      <InputText /> 
    </Root>
  );
};

const InputText = () => {
  
  const [value, setValue] = useState(0)

  function kelvToCels() {
    const kelvins = event?.target?.value
    const celsius = (kelvins - 272.1).toFixed(1)
    if (celsius > 99999 || celsius < -99999) { 
      setValue('Такой температуры не бывает :)') 
    } else setValue(celsius)
  }

  return (
    <div>
      <label htmlFor="input">Enter the Kelvins</label>

      <input type="number" id="input" placeholder='100' style={inputStyles}
      onChange={kelvToCels}/>

      <div style={{minWidth: '40px', width: 'fit-content'}}>
        <p> {value + ' °C' || '- - - - °C'} </p>
      </div>
    </div>
  )
}

const Root = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 0.8em;
  background-color: #84cdfa;
  padding: 20px;
  box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 230px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const inputStyles = {
  background: '#fff',
  color: '#301a57',
  marginTop: '10px',
  width: '194px',
  border: '1px solid #c0ffc0',
  borderRadius: '3px'
}