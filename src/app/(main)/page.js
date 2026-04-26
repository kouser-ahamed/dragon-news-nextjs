import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import { Span } from "next/dist/trace";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null}> </LeftSidebar>
      </div>
      <div className="font-bold text-3xl bg-pink-500 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-amber-300 col-span-3">
        Social Icons
      </div>
    </div>
  );
}
