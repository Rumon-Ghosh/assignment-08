import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useApp from "../Hooks/useApp";
import downloadImg from "../Images/icon-downloads.png";
import ratingImg from "../Images/icon-ratings.png";
import reviewImg from "../Images/icon-review.png";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AppContext } from "../Layouts/MainLayout";

const AppDetails = () => {
  const [apps] = useApp();
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useContext(AppContext);

  const currentApp = apps.find((app) => app.id === Number(id)) || {};
  const { image, title, companyName, ratingAvg, downloads, reviews, ratings, description, size } = currentApp || {};


  const checkInstalled = () => {
    const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
    return installedApps.some((app) => app.id === Number(id));
  };

  useEffect(() => {
    setIsInstalled(checkInstalled());
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
    const alreadyInstalled = installedApps.some((app) => app.id === Number(id));
    if (!alreadyInstalled) {
      alert('App Install Successfully !')
      localStorage.setItem("installed", JSON.stringify([...installedApps, currentApp]));
      setIsInstalled(true);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsInstalled(checkInstalled());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-56 h-56 overflow-hidden">
          <img className="object-cover rounded-lg" src={image} alt={title} />
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="mb-1 text-3xl font-bold text-[#001931]">{title}</h2>
            <p className="text-[20px] text-[#627382]">
              Developed By:
              <span className="text-blue-500 font-medium">{companyName}</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-2">
            <div className="flex flex-col items-start gap-0.5">
              <img src={downloadImg} alt="downloads" />
              <p className="text-[#001931]">Downloads</p>
              <h4 className="text-3xl font-bold">{downloads}</h4>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <img src={ratingImg} alt="ratings" />
              <p className="text-[#001931]">Average Ratings</p>
              <h4 className="text-3xl font-bold">{ratingAvg}</h4>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <img src={reviewImg} alt="reviews" />
              <p className="text-[#001931]">Total Reviews</p>
              <h4 className="text-3xl font-bold">{reviews}</h4>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn w-fit mt-3 text-white ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now ${size} MB`}
          </button> 
        </div>
      </div>

      <div className="mt-10">
        <ResponsiveContainer height={250}>
          <BarChart data={ratings || []}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-[20px] text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;



/**
 * <button
            onClick={() => {
              const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
              const filtered = installedApps.filter((app) => app.id !== Number(id));
              localStorage.setItem("installed", JSON.stringify(filtered));
              setIsInstalled(false);
            }}
            className="text-blue-500 text-sm mt-2 underline"
          >
            Remove from Installed
          </button>
 */

// import React, { useState } from "react";
// import { useParams } from "react-router";
// import useApp from "../Hooks/useApp";
// import downloadImg from "../Images/icon-downloads.png";
// import ratingImg from "../Images/icon-ratings.png";
// import reviewImg from "../Images/icon-review.png";
// import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// const AppDetails = () => {
//   // const [disableButton, setDisableButton] = useState(false)
//   const [apps] = useApp();
//   const { id } = useParams();
//   const currentApp = apps.find((app) => app.id === Number(id)) || [];
//   const {
//     image,
//     title,
//     companyName,
//     ratingAvg,
//     downloads,
//     reviews,
//     ratings,
//     description,
//     size,
//   } = currentApp || {};
//   // console.log(ratings);

//   const handleInstall = () => {
//     const installedApps = JSON.parse(localStorage.getItem('installed'));
//     let updatedList = [];
//     currentApp.disabled = true;
//     if (installedApps) {
//       // const isDuplicate = installedApps.some(app => app.id == id);
//       // if(isDuplicate) return alert('This Item already Installed')
//       updatedList = [...installedApps, currentApp]
//     } else {
//       updatedList.push(currentApp)
//     }
//     localStorage.setItem('installed', JSON.stringify(updatedList))
//   }

//   return (
//     <div className="w-11/12 mx-auto my-20">
//       <div className="flex flex-col md:flex-row gap-5">
//         <div className="max-w-56 h-56 overflow-hidden">
//           <img className="object-cover rounded-lg" src={image} />
//         </div>
//         <div className="flex flex-col">
//           <div>
//             <h2 className="mb-1 text-3xl font-bold text-[#001931]">{title}</h2>
//             <p className="text-[20px] text-[#627382]">
//               Developed By:{" "}
//               <span className="text-blue-500 font-medium">{companyName}</span>
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row gap-5 mt-2">
//             <div className="flex flex-col items-start gap-0.5">
//               <img src={downloadImg} />
//               <p className="text-[#001931]">Downloads</p>
//               <h4 className="text-3xl font-bold">{downloads}</h4>
//             </div>
//             <div className="flex flex-col items-start gap-0.5">
//               <img src={ratingImg} />
//               <p className="text-[#001931]">Average Ratings</p>
//               <h4 className="text-3xl font-bold">{ratingAvg}</h4>
//             </div>
//             <div className="flex flex-col items-start gap-0.5">
//               <img src={reviewImg} />
//               <p className="text-[#001931]">Total Reviews</p>
//               <h4 className="text-3xl font-bold">{reviews}</h4>
//             </div>
//           </div>
//           <button disabled={currentApp.disabled} onClick={handleInstall} className="btn w-fit mt-3 bg-[#00D390] text-white">
//             Install Now {size} MB
//           </button>
//         </div>
//       </div>
//       <div className="mt-10">
//         <ResponsiveContainer height={250}>
//           <BarChart data={ratings || []}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="count" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       <div className="mt-4">
//         <h3 className="text-2xl font-semibold mb-2">Description</h3>
//         <p className="text-[20px] text-[#627382]">{ description}</p>
//       </div>
//     </div>
//   );
// };

// export default AppDetails;

// {
//     "image": "https://upload.wikimedia.org/wikipedia/commons/5/57/App_Store_%28iOS%29.svg",
//     "title": "ChatterHub",
//     "companyName": "SocialLink",
//     "id": 9,
//     "description": "ChatterHub is an all-in-one communication app for messaging, voice calls, video calls, group chat, file sharing, and disappearing messages, with full encryption.",
//     "size": 118,
//     "reviews": 38500,
//     "ratingAvg": 4.1,
//     "downloads": 9500000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 3100
//         },
//         {
//             "name": "2 star",
//             "count": 2400
//         },
//         {
//             "name": "3 star",
//             "count": 5200
//         },
//         {
//             "name": "4 star",
//             "count": 9700
//         },
//         {
//             "name": "5 star",
//             "count": 18100
//         }
//     ]
// }
