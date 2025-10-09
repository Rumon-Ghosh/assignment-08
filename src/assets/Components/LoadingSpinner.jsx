import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RingLoader></RingLoader>
    </div>
  );
};

export default LoadingSpinner;
