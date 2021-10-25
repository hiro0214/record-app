import { ChangeEvent, memo, useCallback, useState } from 'react';
import { TextInput } from '../components/atoms/TextInput';
import { Button } from '../components/atoms/Button';
import { Form } from '../components/organism/Form';
import { useHistory } from 'react-router';

export const Regist = memo(() => {
  const [registId, setRegistId] = useState('');
  const history = useHistory();

  const onChangeRegistId = (e: ChangeEvent<HTMLInputElement>) => setRegistId(e.target.value);

  const registUser = useCallback(() => history.push('/user/1'), []);

  return (
    <Form>
      <p className="hdg">新規登録</p>
      <TextInput
        value={registId}
        onChange={onChangeRegistId}
        placeholder={'ログインIDを入力してください'}
      />
      <Button label={'登録'} onClick={registUser}></Button>
    </Form>
  );
});
