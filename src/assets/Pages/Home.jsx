import React from "react";
import Banner from "../Components/Banner";
import Progress from "../Components/Progress";
import AppList from "../Components/AppList";
import useApp from "../Hooks/useApp";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const [apps, loading] = useApp();
  const featuredData = apps.slice(0, 8);
  // console.log(featuredData)
  if(loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="my-15">
      <Banner></Banner>
      <Progress></Progress>
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="text-center text-5xl font-bold text-[#001931]">
          Trending Apps
        </h1>
        <p className="text-center text-[20px] text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {featuredData.map((app) => (
            <AppList key={app.id} app={app}></AppList>
          ))}
        </div>
        <div className="flex items-center justify-center mt-7">
          <Link className="btn bg-gradient-to-bl from-[#9F62F2] to-[#632EE3] text-white" to={`/apps`}>
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
