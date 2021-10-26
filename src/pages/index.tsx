import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';
import * as fcl from '@onflow/fcl';
import '../libs/config';

const Home: NextPage = () => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const AuthedState = () => {
    return (
      <div>
        <div>Address: {user?.addr ?? 'No Address'}</div>
        <button onClick={fcl.unauthenticate}>Log Out</button>
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <button onClick={fcl.logIn}>Log In</button>
        <button onClick={fcl.signUp}>Sign Up</button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Flow App</h1>
      {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
    </div>
  );
};

export default Home;
