import { useEffect } from 'react';

export const Home = () => {
  let login = false;
  useEffect(() => {
    if (login == false) {
      window.location = '/login';
    }
  }, [login]);
  return <></>;
};
