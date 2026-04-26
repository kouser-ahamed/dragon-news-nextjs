import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto gap-4 mt-6">
      <div> </div>
      <ul className="flex justify-between items-center gap-4 text-[#706F6F]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <Image src={userAvatar} alt="userAvatar" width={40} height={4} />
        <button className="btn bg-[#403F3F] text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
