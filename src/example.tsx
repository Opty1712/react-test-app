import { styled } from 'linaria/react';
import React, { ChangeEvent, useState } from 'react';

export const Example = () => {
  const [cel, setCelsius] = useState<string | number>('')
  const [kel, setKelvins] = useState<string | number>('')

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
    { title: 'Celsius', symbol: '°C', func: onCelsiusChange, val: cel },
    { title: 'Kelvins', symbol: 'K', func: onKelvinsChange, val: kel }
  ]

  return (
    <Root>
      {systems.map(({ title, symbol, func, val }) => 
        <div key={title}>
          <h2>{title}</h2>  
          <p><input type="number" onChange={func} value={val} id={title} /> {symbol}</p>
        </div>
        )
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