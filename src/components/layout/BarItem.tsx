import React from 'react';
import styled from 'styled-components';

export interface IBarItemProps {
  active?: boolean;
}

const Button = styled.div<IBarItemProps>`
  display: inline-block;
  padding: 18px 31px 17px 34px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#006CFF' : '#c4c4c4')};
  color: ${(props) => (props.active ? '#fff' : '#fff')};
  cursor: pointer;
`;

const BarItem: React.FC<IBarItemProps> = ({ active = false, children }) => {
  return <Button active={active}>{children}</Button>;
};

export default BarItem;
