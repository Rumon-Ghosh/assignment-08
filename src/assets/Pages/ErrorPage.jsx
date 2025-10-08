import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h2>Error: page not found</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;