/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";

//import navigation hook
import { useRouter } from "next/navigation";

// import hanko third party authentication
import { Hanko } from "@teamhanko/hanko-elements";

// import { trcp } from "@/lib/trpc";

// import hanko api url
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

interface UserData {
  id: string;
  email: string;
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
  company_name: string;
  phone_no: string;
}

const userProfile = () => {
  const router = useRouter();
  const hanko = new Hanko(hankoApi || "");
  // const addTodoMutation = trcp.create.useMutation();
  // const trcpContext = trcp.useContext();

  // const responce = trcp.list.useQuery();

  // if (responce.isError) {
  //   return <h2>Error</h2>;
  // }

  // if (responce.isLoading) {
  //   return <h2>Loading....</h2>;
  // }

  const [userDetails, setuserDetails] = useState<UserData>({
    id: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    name: "",
    email: "",
    company_name: "",
    phone_no: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      const { id, email } = await hanko?.user.getCurrent();
      setuserDetails({ id, email });
      setUserInfo((pre) => {
        return {
          ...pre,
          id,
          email,
        };
      });
    };
    getUserData();
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserInfo((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handelSubmit = () => {

    console.log(userInfo);
    
    // addTodoMutation.mutate(
    //   {
    //     id: userInfo.id,
    //     name: userInfo.company_name,
    //     email: userInfo.email,
    //     company_name: userInfo.company_name,
    //     phone_no: userInfo.phone_no,
    //   },
    //   {
    //     onSuccess: () => {
    //       setUserInfo({
    //         id: "",
    //         name: "",
    //         email: "",
    //         company_name: "",
    //         phone_no: "",
    //       });
    //       setIsLoading(false);

    //       trcpContext.list.invalidate();
    //     },
    //   }
    // );

    setTimeout(() => {
      setIsLoading(false);
      router.replace("/ListUser");

    }, 2000)
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <div
        style={{
          boxShadow: "0px 0px 61.3082px rgba(0, 0, 0, 0.15)",
        }}
        className=" w-[600px] py-6 flex flex-col gap-10"
      >
        <div className="flex items-center justify-center">
          <h1 className=" text-xl font-bold">Your Profile Details</h1>
        </div>

        <div className="flex flex-col px-6 gap-2">
          <label htmlFor="name" className=" cursor-pointer">
            Name
          </label>
          <input
            id="name"
            onChange={handleChange}
            name="name"
            type="text"
            maxLength={26}
            placeholder="Name"
            className=" focus:border-blue-500 outline-none border-2 border-gray-200 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col px-6 gap-2">
          <label htmlFor="email" className=" cursor-pointer">
            Email
          </label>
          <input
            id="email"
            onChange={handleChange}
            name="email"
            type="email"
            value={userDetails.email}
            placeholder="Example@gmail.com"
            disabled
            className=" focus:border-blue-500 outline-none border-2 border-gray-200 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col px-6 gap-2">
          <label htmlFor="company_name" className=" cursor-pointer">
            CompanyName
          </label>
          <input
            id="company_name"
            onChange={handleChange}
            name="company_name"
            type="text"
            placeholder="CompanyName"
            className="focus:border-blue-500  outline-none border-2 border-gray-200 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col px-6 gap-2">
          <label htmlFor="phone_no" className=" cursor-pointer">
            Phone_no
          </label>
          <input
            id="phone_no"
            onChange={handleChange}
            name="phone_no"
            type="text"
            maxLength={10}
            placeholder="Phone Number"
            className=" focus:border-blue-500 outline-none border-2 border-gray-200 rounded-lg p-2"
          />
        </div>

        <div className="flex items-center justify-center">
          {!isLoading ? (
            <button
              onClick={() => {
                setIsLoading(true);
                handelSubmit();
              }}
              className=" bg-blue-500 w-[90%] py-2 rounded-lg text-white hover:bg-blue-300"
            >
              Submit
            </button>
          ) : (
            <button className=" bg-blue-500 w-[90%] py-2 rounded-lg text-white hover:bg-blue-300">
              Loading...
            </button>
          )}
        </div>
      </div>

      {/* <div>
        {responce.data.map((i) => (
          <p key={i.id}>{i.name}</p>
        ))}
      </div> */}
    </div>
  );
};

export default userProfile;
