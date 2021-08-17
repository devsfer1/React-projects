import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { LoginForm } from '../src/components/Form/Login';

const Home: NextPage = () => {
  return (
    <div className='w-full bg-primary-dark h-screen flex items-center justify-center'>
      <LoginForm />
    </div>  
  );
};

export default Home;
