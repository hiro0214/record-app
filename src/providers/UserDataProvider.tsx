import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { userData } from '../types/userData';

import datas from '../data.json';

export type UserDataContextType = {
  data: userData[];
  setData: Dispatch<SetStateAction<userData[]>>;
};

export const UserDataContext = createContext<UserDataContextType>({} as UserDataContextType);

export const UserDataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [data, setData] = useState<userData[]>(datas);

  return <UserDataContext.Provider value={{ data, setData }}>{children}</UserDataContext.Provider>;
};
