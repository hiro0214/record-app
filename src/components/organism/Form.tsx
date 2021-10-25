import { memo, ReactNode, VFC } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
};

export const Form: VFC<props> = memo((props) => {
  const { children } = props;
  return (
    <SContainer>
      <SForm>{children}</SForm>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  .hdg {
    font-size: 20px;
    font-weight: bold;
  }
`;

const SForm = styled.div`
  width: 50%;
  padding: 30px 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
`;
