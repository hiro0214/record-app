import { ChangeEvent, memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '../components/atoms/Button';
import { TextInput } from '../components/atoms/TextInput';
import { Form } from '../components/organism/Form';

export const Login = memo(() => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const login = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const regist = useCallback(() => history.push('/regist'), []);

  return (
    <Form>
      <p className="hdg">ログイン</p>
      <TextInput
        value={userId}
        onChange={onChangeUserId}
        placeholder="ログインIDを入力してください"
      />
      <Button label={'ログイン'} isLoading={loading} onClick={login}></Button>
      <p style={{ marginTop: '50px', marginBottom: '10px' }}>
        初めての方はこちらから登録してください。
      </p>
      <Button label={'新規登録'} onClick={regist}></Button>
    </Form>
  );
});
