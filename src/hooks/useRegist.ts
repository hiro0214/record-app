import { useCallback } from 'react';
import { userData } from '../types/userData';

export const useRegist = () => {
  const regist = useCallback((data: userData[], setData, newId: string, name: string) => {
    const isRegisted = data.some((d) => d.id === newId);
    if (isRegisted) return;

    const user: userData = {
      id: newId,
      nickname: name,
      data: {},
    };

    setData(data.push(user));
    return user;
  }, []);

  return { regist };
};
