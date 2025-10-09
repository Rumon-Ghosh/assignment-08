import React, { useEffect, useState } from "react";
import useApp from "../Hooks/useApp";
import { Search } from "lucide-react";
import AppList from "../Components/AppList";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [appsData, loading] = useApp();
  const [isSearching, setIsSearching] = useState(false);

  setTimeout(() => {
    setIsSearching(true);
  }, 1000);

  const searchValidation = search.trim().toLowerCase();
  const filteredApp = searchValidation
    ? appsData.filter((app) =>
        app.title.trim().toLowerCase().includes(searchValidation)
      )
    : appsData;

  // console.log(filteredApp);
  // if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="w-11/12 mx-auto my-20">
      <h1 className="text-5xl font-bold text-[#001931] text-center mb-4">
        Our All Applications
      </h1>
      <p className="text-center text-[20px] text-[#627382] mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center">
        <h3 className="text-[24px] font-semibold text-[#001931]">
          ({filteredApp.length}) Apps Found
        </h3>
        <label className="input">
          <span className="label">
            <Search></Search>
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>
      {filteredApp.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {filteredApp.map((app) => (
            <AppList key={app.id} app={app}></AppList>
          ))}
        </div>
      ) : (
        <div className="min-h-32 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold text-[#001931] mb-4">
            No App Found
          </h2>
          <Link className="btn btn-outline" to={`/`}>
            Back To Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Apps;
