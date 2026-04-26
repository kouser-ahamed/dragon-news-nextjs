import Image from "next/image";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body bg-slate-200 p-4">
        {/* author info */}
        <div className="flex justify-between items-cente">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img || "/default-avatar.png"}
              alt={news.author?.name || "Author"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">
                {news.author?.name || "Unknown Author"}
              </h2>
              <p className="text-xs">
                {news.author?.published_date || "No date"}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4">
         <h2 className="text-2xl font-bold">{news.title}</h2>
      </div>
      <figure>
        <Image
          src={news.image_url}
          alt={news.title}
          width={300}
          height={300}
          className="w-full p-4"
        />
      </figure>
      <p className="p-4 ">{news.details}</p>
    </div>
  );
};

export default NewsCard;
