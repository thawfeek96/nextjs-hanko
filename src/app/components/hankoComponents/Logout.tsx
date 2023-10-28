"use client";
 
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Hanko} from "@teamhanko/hanko-elements";
 
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export function LogoutBtn() {
  const router = useRouter();
  const hanko = useMemo(() => new Hanko(hankoApi ?? ""), []);

 
  const logout = async () => {
    try {
      await hanko.user.logout()
      router.replace("/");
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
 
  return <button className=" bg-blue-400 text-white px-4 py-1" onClick={logout}>Logout</button>;
}
