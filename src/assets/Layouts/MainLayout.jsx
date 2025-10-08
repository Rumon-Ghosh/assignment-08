import React, { createContext, useState } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export const AppContext = createContext();

const MainLayout = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <AppContext.Provider value={[isInstalled, setIsInstalled]}>
        <main className="flex-1 bg-[#f5f5f5]">
          <Outlet></Outlet>
        </main>
      </AppContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
