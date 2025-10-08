import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Layouts/MainLayout";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const [remainingApp, setRemainingApp] = useState([]);
  const [installedApp, setInstalledApp] = useContext(AppContext);

  useEffect(() => {
    const storedApp = JSON.parse(localStorage.getItem("installed")) || [];
    setRemainingApp(storedApp);
  }, []);

  console.log(remainingApp);
  const handleRemaining = (id) => {
    const updatedList = remainingApp.filter((app) => app.id !== id);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    setRemainingApp(updatedList);
    setInstalledApp(updatedList);
  }

  return (
    <div className="w-11/12 mx-auto my-15">
      <h1 className="text-5xl font-bold text-[#001931] text-center mb-3">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] text-[20px] mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex items-center justify-between">
        <h4>{remainingApp.length} Apps Found</h4>
        <fieldset className="fieldset">
          <select defaultValue="Pick a browser" className="select">
            <option disabled={true}>Pick a browser</option>
            <option>Chrome</option>
            <option>FireFox</option>
            <option>Safari</option>
          </select>
        </fieldset>
      </div>
      {remainingApp.map((list) => (
        <div key={list.id} className="flex justify-between items-center rounded-lg mt-10 mb-4 p-4 bg-white">
          <div className="flex gap-2">
            <div className="w-15 h-15">
              <img className="rounded" src={list.image} alt="" />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">{list.title}</h5>
              <div className="flex gap-4">
                <div className="hidden md:flex gap-0.5">
                  <Download />
                  {list.downloads}
                </div>
                <div className="flex gap-0.5">
                  <Star />
                  {list.ratingAvg}
                </div>
                <p>{list.size} MB</p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#00D390] text-white btn" onClick={() => handleRemaining(list.id)}>Uninstall</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;

