import { styled } from 'linaria/react';
import React, { ChangeEvent, useState } from 'react';

export const Example = () => {
  
  // const [systemName, setSystemName] = useState<string | number>()
  const [celsius, setCelsius] = useState<string | number>()
  const [kelvins, setKelvins] = useState<string | number>()

  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const [systemName, setSystemName] = useState<string | number>()
  //   const systemNameValue = Number(event?.target?.value)
  //   setSystemName(systemNameValue)
  // }
  
  const onCelsiusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const celsius = Number(event?.target?.value)
    setCelsius(celsius)
    setKelvins(celsius * 2)
  }
  
  const onKelvinsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const kelvins = Number(event?.target?.value)
    setKelvins(kelvins)
    setCelsius(kelvins / 2)
  }  

  const systems = [
    { title: 'Celsius', symbol: '°C', onch: onCelsiusChange, val: celsius },
    { title: 'Kelvins', symbol: 'K', onch: onKelvinsChange, val: kelvins }
  ]

  return (
    <Root>
      {systems.map(({ title, symbol, onch, val }) => 
        <div>
          <h2>{title}</h2>  
          <p><input type="number" onChange={onch} value={val} /> {symbol}</p>
        </div>)
      }
    </Root>
  );
};

const Root = styled.div`
  color: #black;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;