import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import RightSidebar from "@/components/shared/homepage/news/RightSidebar";
import React from "react";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );

  const data = await res.json();
  return data.data;
}

const newsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "params from news category page");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}>
          {" "}
        </LeftSidebar>
      </div>
      <div className="font-bold col-span-6">
        <h2 className="font-bold text-lg ">
            Dragon News Home
        </h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((newsItem) => {
              return (
                <div key={newsItem._id} className="p-6 rounded-md border">
                  {" "}
                  {newsItem.title}
                </div>
              );
            })
          ) : (
            <h2 className="text-center text-2xl font-bold">
              No news found for this category
            </h2>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar> </RightSidebar>
      </div>
    </div>
  );
};

export default newsCategoryPage;
