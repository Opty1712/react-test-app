import { styled } from 'linaria/react';
import { ChangeEvent, useState } from 'react';

type Values = Record<string, { value: number; name: string }>;

export const Example = () => {
  const [values, setValues] = useState<Values>({
    celsius: { value: 0, name: 'celsius' },
    kelvins: { value: 0, name: 'kelvins' },
    far: { value: 0, name: 'far' }
  });

  const getOnChangeHandler = (key: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    setValues((values) => {
      const newValues = {
        ...values,
        [key]: { value, name: key }
      };

      if (key === 'celsius') {
        newValues.kelvins = { name: key, value: value * 2 };
        newValues.far = { name: key, value: value + 2 };
      }

      if (key === 'kelvins') {
        newValues.celsius = { name: key, value: value / 2 };
        newValues.far = { name: key, value: value + 2 };
      }

      if (key === 'far') {
        newValues.celsius = { name: key, value: value + 2 };
        newValues.kelvins = { name: key, value: value * 2 };
      }

      return newValues;
    });
  };

  return (
    <Root>
      {Object.entries(values).map(([key, content]) => (
        <div key={key}>
          <h2>{content.name}</h2>
          <p>
            <input
              type="number"
              onChange={getOnChangeHandler(key)}
              value={content.value}
            />
          </p>
        </div>
      ))}
    </Root>
  );
};

const Root = styled.div`
  color: black;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
