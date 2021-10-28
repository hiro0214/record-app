import { ChangeEvent, memo, VFC } from 'react';
import styled from 'styled-components';

type props = {
  utility?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const TextInput: VFC<props> = memo((props) => {
  const { utility, value, onChange, placeholder } = props;
  return (
    <SInput
      type="text"
      className={utility}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});

const SInput = styled.input`
  width: 100%;
  padding: 12px 16px;
`;
