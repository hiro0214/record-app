import styled from 'styled-components';
import { memo, ReactNode, VFC } from 'react';

type props = {
  children: ReactNode;
  size: string;
};

export const Hdg: VFC<props> = memo((props) => {
  const { children, size } = props;
  return <SHdg className={size}>{children}</SHdg>;
});

const SHdg = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  &.hdg--1 {
    font-size: 28px;
  }
  &.hdg--2 {
    font-size: 24px;
  }
  &.hdg--3 {
    font-size: 20px;
  }
  &.hdg--4 {
    font-size: 16px;
  }
`;
