import { useSelector } from 'react-redux';
import { isUserLogin, getToken } from '../redux/userReducer';

export const useUserLogin = () => {
  const isLogin = useSelector(isUserLogin);
  const token = useSelector(getToken);

  return { isLogin, token };
};
