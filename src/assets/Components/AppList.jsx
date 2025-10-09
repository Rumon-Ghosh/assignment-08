import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppList = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link to={`/app/${id}`} className="shadow-xl rounded-2xl p-3 space-y-2 hover:scale-105 transition ease-linear">
      <div className="max-w-56 h-48 overflow-hidden rounded-lg mx-auto">
        <img className="object-cover" src={image}  />
      </div>
      <h3 className="font-semibold text-[20px] text-[#001931]">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 rounded-md">
          <Download></Download>
          <span>{downloads}</span>
        </div>
        <div className="flex gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 rounded-md">
          <Star></Star>
          <span>{ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppList;


