/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";

//import nextjs hooks
import Link from "next/link";

// import hanko third party authentication
import { Hanko } from "@teamhanko/hanko-elements";

// import compunents
import { LogoutBtn } from "@/app/components/hankoComponents/Logout";

// import hanko api url
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

interface UserData {
  id: string;
  email: string;
}

const Navbar = () => {
  const [userDetails, setuserDetails] = useState<UserData>({
    id: "",
    email: "",
  });
  const hanko = new Hanko(hankoApi || "");

  

  useEffect(() => {
    
    
    const getUserData = async () => {
      const { id, email } = await hanko?.user.getCurrent()
      setuserDetails({ id, email });
    };

    getUserData();
  }, [hanko]);

  return (
    <nav className="nav flex items-center justify-around py-[16px]">
      <Link href="/">
        <h1 className=" text-2xl font-bold text-white">Data Entry System</h1>
      </Link>
      <ul className=" w-[40%] flex items-center justify-between text-white font-semibold cursor-pointer">
        <Link href="/AddUser">Add User</Link>
        <Link href="/ListUser">Users</Link>
        <Link href="/About">About</Link>
        {userDetails.id !== "" && userDetails.email !== "" && (
          <div>
            <p>{userDetails.email}</p>
            <LogoutBtn />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
