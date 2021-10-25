import styled from 'styled-components';
import { ChangeEvent, memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '../components/atoms/Button';

export const Login = memo(() => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const login = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const regist = useCallback(() => history.push('/regist'), []);

  return (
    <SContainer>
      <SLogin>
        <p className="hdg">ログイン</p>
        <SInput
          type="text"
          value={userId}
          onChange={onChangeUserId}
          placeholder="ログインIDを入力してください"
        />
        <Button label={'ログイン'} isLoading={loading} onClick={login}></Button>
        <p style={{ marginTop: '50px', marginBottom: '10px' }}>
          初めての方はこちらから登録してください。
        </p>
        <Button label={'新規登録'} onClick={regist}></Button>
      </SLogin>
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

const SLogin = styled.div`
  width: 50%;
  padding: 30px 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
`;

const SInput = styled.input`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 12px 16px;
`;
