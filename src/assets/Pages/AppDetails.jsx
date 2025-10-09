import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useApp from "../Hooks/useApp";
import downloadImg from "../Images/icon-downloads.png";
import ratingImg from "../Images/icon-ratings.png";
import reviewImg from "../Images/icon-review.png";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppContext } from "../Layouts/MainLayout";
import { toast } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useContext(AppContext);
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const currentApp = apps.find((app) => app.id === Number(id));

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
      toast.success(`${currentApp?.title} Installed Successfully !`);
      localStorage.setItem(
        "installed",
        JSON.stringify([...installedApps, currentApp])
      );
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

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      {!currentApp ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            App Not Found
          </h1>
          <p className="text-gray-500 text-center">
            The app you’re looking for doesn’t exist or was removed.
          </p>
          <Link className="btn btn-outline mt-3" to={`/`}>Back</Link>
        </div>
      ) : (
        <div className="w-11/12 mx-auto my-20">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="max-w-56 h-56 overflow-hidden">
              <img
                className="object-cover rounded-lg"
                src={currentApp?.image}
                alt={currentApp?.title}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h2 className="mb-1 text-3xl font-bold text-[#001931]">
                  {currentApp?.title}
                </h2>
                <p className="text-[20px] text-[#627382]">
                  Developed By:
                  <span className="text-blue-500 font-medium">
                    {" "}
                    {currentApp?.companyName}
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-7 mt-2">
                <div className="flex flex-col items-start gap-0.5">
                  <img src={downloadImg} alt="downloads" />
                  <p className="text-[#001931]">Downloads</p>
                  <h4 className="text-3xl font-bold">
                    {currentApp?.downloads}
                  </h4>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <img src={ratingImg} alt="ratings" />
                  <p className="text-[#001931]">Average Ratings</p>
                  <h4 className="text-3xl font-bold">
                    {currentApp?.ratingAvg}
                  </h4>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <img src={reviewImg} alt="reviews" />
                  <p className="text-[#001931]">Total Reviews</p>
                  <h4 className="text-3xl font-bold">{currentApp?.reviews}</h4>
                </div>
              </div>

              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`btn w-fit mt-3 text-white ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00D390]"
                }`}
              >
                {isInstalled
                  ? "Installed"
                  : `Install Now ${currentApp?.size} MB`}
              </button>
            </div>
          </div>

          <div className="mt-10">
            <ResponsiveContainer height={250}>
              <BarChart data={currentApp?.ratings || []}>
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
            <p className="text-[20px] text-[#627382]">
              {currentApp?.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AppDetails;
