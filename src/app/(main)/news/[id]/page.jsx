import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  console.log(id);

  const news = await getNewsDetailsById(id);
  console.log(news, "news details from news details page");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-9">
        <h2 className="mb-4 font-bold">Dragon News</h2>
        <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
          {/* Body */}
          <div className="p-4 space-y-3">
            {/* Image */}
            <Image
              src={news.image_url}
              alt={news.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />

            {/* Title */}
            <h2 className="text-lg font-bold leading-snug">{news.title}</h2>
            {/* Details */}
            <p className="text-sm text-gray-600">{news.details}</p>
            <Link href={`/category/${news.category_id}`}>
              <span className="text-white bg-[#D72050] font-semibold cursor-pointer btn">
                <FaArrowLeft />
                All news in this category
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default NewsDetailsPage;
