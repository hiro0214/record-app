import styled from 'styled-components';
import { ChangeEvent, memo, VFC } from 'react';

type props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const TextInput: VFC<props> = memo((props) => {
  const { value, onChange, placeholder } = props;
  return <SInput type="text" value={value} onChange={onChange} placeholder={placeholder} />;
});

const SInput = styled.input`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 12px 16px;
`;
