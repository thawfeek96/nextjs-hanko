"use client";

import { useEffect, useState } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const hanko = new Hanko(hankoApi ?? "");

interface UserState {
  id: string;
  email: string;
}

function UsersData() {
  const [user, setUser] = useState<UserState>({
    id: "",
    email: "",
  });

  useEffect(() => {
    const getUserData = async (): Promise<void> => {
      try {
        const { id, email }: { id: string; email: string } =
          await hanko.user.getCurrent();
        setUser({ id, email });
      } catch (error) {
        console.error("Failed to get user data:", error);
      }
    };

    getUserData();
  }, []);

  if (!user) return "Loading...";

  return (
    <div>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UsersData;
