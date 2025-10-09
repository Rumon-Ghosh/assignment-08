import React, { useEffect, useState } from "react";
import useApp from "../Hooks/useApp";
import { Search } from "lucide-react";
import AppList from "../Components/AppList";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import appErrorImg from "../Images/App-Error.png";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [appsData, loading] = useApp();
  const [isSearching, setIsSearching] = useState(false);
  const [searchApp, setSearchApp] = useState([]);

  useEffect(() => {
    setIsSearching(true);

    const timer = setTimeout(() => {
      const searchTerm = search.trim().toLowerCase();
      const filtered = searchTerm
        ? appsData.filter((app) =>
            app.title.trim().toLowerCase().includes(searchTerm)
          )
        : appsData;

      setSearchApp(filtered);
      setIsSearching(false); 
    }, 500); 

    return () => clearTimeout(timer);
  }, [search, appsData]);

  if (loading) return <LoadingSpinner />; 

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-5xl font-bold text-[#001931] text-center mb-4">
        Our All Applications
      </h1>
      <p className="text-center text-[20px] text-[#627382] mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between items-center">
        <h3 className="text-[24px] font-semibold text-[#001931]">
          ({searchApp.length}) Apps Found
        </h3>
        <label className="input flex items-center gap-2 border rounded-lg px-3 py-2">
          <Search className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
            className="outline-none w-full"
          />
        </label>
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : searchApp.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {searchApp.map((app) => (
            <AppList key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="min-h-32 flex flex-col items-center justify-center">
          <img className="mb-4 w-40" src={appErrorImg} alt="No App Found" />
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




// import React, { use, useEffect, useState } from "react";
// import useApp from "../Hooks/useApp";
// import { Search } from "lucide-react";
// import AppList from "../Components/AppList";
// import { Link } from "react-router";
// import LoadingSpinner from "../Components/LoadingSpinner";
// import appErrorImg from "../Images/App-Error.png";

// const Apps = () => {
//   const [search, setSearch] = useState("");
//   const [appsData, loading] = useApp();
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchApp, setSearchApp] = useState([])

//   useEffect(() => {
//     if (!isLoading) {
//       setTimeout(() => {
//         setIsLoading(true)
//         const searchValidation = search.trim().toLowerCase();
//         const filteredApp = searchValidation
//           ? appsData.filter((app) =>
//               app.title.trim().toLowerCase().includes(searchValidation)
//             )
//           : appsData;
//         setSearchApp([...filteredApp])
//       }, 1500);
//     }
//     return () => setIsLoading(false);
//   }, [isLoading,search, appsData]);

//   if (loading && isLoading) return <LoadingSpinner></LoadingSpinner>;
//   return (
//     <div className="w-11/12 mx-auto my-20">
//       <h1 className="text-5xl font-bold text-[#001931] text-center mb-4">
//         Our All Applications
//       </h1>
//       <p className="text-center text-[20px] text-[#627382] mb-10">
//         Explore All Apps on the Market developed by us. We code for Millions
//       </p>
//       <div className="flex justify-between items-center">
//         <h3 className="text-[24px] font-semibold text-[#001931]">
//           ({searchApp.length}) Apps Found
//         </h3>
//         <label className="input">
//           <span className="label">
//             <Search></Search>
//           </span>
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             type="search"
//             placeholder="Search App"
//           />
//         </label>
//       </div>
//       {searchApp.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
//           {searchApp.map((app) => (
//             <AppList key={app.id} app={app}></AppList>
//           ))}
//         </div>
//       ) : (
//         <div className="min-h-32 flex flex-col items-center justify-center">
//           <img className="mb-4" src={appErrorImg} />
//           <h2 className="text-4xl font-semibold text-[#001931] mb-4">
//             No App Found
//           </h2>
//           <Link className="btn btn-outline" to={`/`}>
//             Back To Home
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Apps;
