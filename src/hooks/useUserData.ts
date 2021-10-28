import { useContext } from 'react';
import { UserDataContext } from '../providers/UserDataProvider';

export const useUserData = () => useContext(UserDataContext);
