import styled from 'styled-components';

interface IBox {
  mTop?: number;
  mRight?: number;
  mBottom?: number;
  mLeft?: number;
  pTop?: number;
  pRight?: number;
  pBottom?: number;
  pLeft?: number;
}

interface IButtonProps {
  primary: boolean;
}

const Button = styled.button<IButtonProps>`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Box = styled.div<IBox>`
  margin: ${({ mTop = 0, mRight = 0, mBottom = 0, mLeft = 0 }) =>
    `${mTop}px ${mRight}px ${mBottom}px ${mLeft}px`};
  padding: ${({ pTop = 0, pRight = 0, pBottom = 0, pLeft = 0 }) =>
    `${pTop}px ${pRight}px ${pBottom}px ${pLeft}px`};
`;

export { Button, Box };
