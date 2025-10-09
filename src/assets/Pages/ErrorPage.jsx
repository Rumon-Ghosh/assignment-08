import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import errorImg from "../Images/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1 flex flex-col justify-center items-center my-3">
        <img src={errorImg} />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold mb-2">Oops, page not found!</h2>
          <p>The page you are looking for is not available.</p>
          <Link to="/" className="btn btn-primary mt-2">
            Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
