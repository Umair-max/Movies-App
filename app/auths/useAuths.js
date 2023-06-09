import {useContext} from 'react';
import auth from '@react-native-firebase/auth';
import AuthsContext from './AuthsContext';

export default useAuths = () => {
  const {user, setUser} = useContext(AuthsContext);

  const login = user => {
    setUser(user);
  };

  const logOut = () => {
    auth()
      .signOut()
      .then(() => {
        setUser('');
      });
  };

  return {user, setUser, login, logOut};
};
