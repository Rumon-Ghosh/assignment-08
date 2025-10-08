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

// {
//     "image": "https://img.freepik.com/free-vector/vector-notebook-silhouette-design_779267-1820.jpg",
//     "title": "NoteDaily",
//     "companyName": "BrightApps Inc.",
//     "id": 1,
//     "description": "NoteDaily is a minimal yet powerful note-taking app that supports rich text formatting, tags, folders, voice memos, and automatic cloud backup across devices. Offline mode ensures you never lose your work.",
//     "size": 42,
//     "reviews": 12456,
//     "ratingAvg": 4.6,
//     "downloads": 2300000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 340
//         },
//         {
//             "name": "2 star",
//             "count": 520
//         },
//         {
//             "name": "3 star",
//             "count": 1200
//         },
//         {
//             "name": "4 star",
//             "count": 3560
//         },
//         {
//             "name": "5 star",
//             "count": 8836
//         }
//     ]
// }
