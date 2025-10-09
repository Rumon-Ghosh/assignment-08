import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar></NavBar>
      <div className='flex items-center justify-center flex-1'>
        <RingLoader></RingLoader>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoadingSpinner;