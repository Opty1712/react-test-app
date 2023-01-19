import { css } from 'linaria';
import { styled } from 'linaria/react';
import { useAppTheme } from './AppThemeProvider';
import { Theme, withTheme } from './theme';

export const Example = () => {
  const { toggleTheme } = useAppTheme();

  return (
    <Root>
      <button onClick={toggleTheme}>сменить тему</button>
      <br />
      <br />
      <br />

      <Item> текст дефолтного цвета</Item>

      <Wrapper>
        <Item>текст цвета из темы</Item>
        <Item className={customBorder}>
          цвет рамки перебит на свой класснеймом
        </Item>
        <Item2 className={customBorder}>
          цвет рамки перебит рутовым компонентом
        </Item2>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  background-color: green;
  padding: 20px;
`;

const Item = withTheme(styled.div<Theme>`
  display: inline-block;
  && {
    border: 5px solid red;
  }
  margin: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.Text.Primary};
`);

const Item2 = styled.div`
  border: 5px solid orange;
`;

const customBorder = css`
  &&& {
    border: 5px solid #fff;
  }
`;

const Wrapper = withTheme(styled.div<Theme>`
  color: ${({ theme }) => theme.Text.Secondary};

  ${Item} {
    border-color: #f0f;
  }

  && {
    .${customBorder} {
      border-color: #000;
    }
  }

  && {
    ${Item2}.${customBorder} {
      border-color: #a8cc26;
    }
  }
`);

export default Example;
