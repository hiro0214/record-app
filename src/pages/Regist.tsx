import { ChangeEvent, memo, useState } from 'react';
import { useHistory } from 'react-router';
import { TextInput } from '../components/atoms/TextInput';
import { Button } from '../components/atoms/Button';
import { Form } from '../components/organism/Form';
import { Hdg } from '../components/atoms/Hdg';
import { useRegist } from '../hooks/useRegist';
import { useUserData } from '../hooks/useUserData';

export const Regist = memo(() => {
  const [registId, setRegistId] = useState('');
  const [name, setName] = useState('');
  const [isDisabled, setIsDiesabled] = useState(true);
  const history = useHistory();
  const { data, setData } = useUserData();
  const { regist } = useRegist();

  const onChangeRegistId = (e: ChangeEvent<HTMLInputElement>) => {
    setRegistId(e.target.value);
    registId && name ? setIsDiesabled(false) : setIsDiesabled(true);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    registId && name ? setIsDiesabled(false) : setIsDiesabled(true);
  };

  const registUser = () => {
    const user = regist(data, setData, registId, name);

    if (user) {
      alert('登録しました');
      history.push(`/user/${user.id}`);
      console.log('globalData', data);
    } else {
      alert('登録に失敗しました');
    }
  };

  return (
    <Form>
      <Hdg size={'hdg--1'}>新規登録</Hdg>
      <TextInput
        value={registId}
        onChange={onChangeRegistId}
        placeholder={'登録するログインIDを入力してください'}
      />
      <TextInput
        utility={'mt20'}
        value={name}
        onChange={onChangeName}
        placeholder={'ニックネームを入力してください'}
      />
      <Button utility={'mt40'} label={'登録'} onClick={registUser} isDisabled={isDisabled}></Button>
    </Form>
  );
});
