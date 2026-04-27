import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">

      {/* Author Section */}
      <div className="flex justify-between items-center bg-slate-100 p-4">
        <div className="flex gap-3 items-center">
          <Image
            src={news.author?.img || "/default-avatar.png"}
            alt={news.author?.name || "Author"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">
              {news.author?.name || "Unknown Author"}
            </h2>
            <p className="text-xs text-gray-500">
              {news.author?.published_date || "No date"}
            </p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <CiShare2 className="text-xl cursor-pointer hover:text-blue-500 transition" />
          <CiBookmark className="text-xl cursor-pointer hover:text-orange-500 transition" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h2 className="text-lg font-bold leading-snug">
          {news.title}
        </h2>

        {/* Image */}
        <Image
          src={news.image_url}
          alt={news.title}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
        />

        {/* Details */}
        <p className="text-sm text-gray-600 line-clamp-4">
          {news.details}
        </p>

        {/* Read More */}
        <Link href={`/news/${news._id}`}>
          <span className="text-orange-500 font-semibold cursor-pointer">
            Read More
          </span>
        </Link>

        {/* Footer */}
        <div className="flex justify-between items-center py-4 border-t text-lg text-gray-500 mt-3">

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400 -400">
            <IoIosStarHalf /><IoIosStarHalf /><IoIosStarHalf /><IoIosStarHalf /><IoIosStarHalf />
            <span className="text-gray-700 ml-1">
              {news.rating?.number || 0}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye />{news.total_view || 0}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;