"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

interface UserInfo {
  name: string;
  id: string;
  email: string;
  contact: string;
  age: string;
}

const AddUser = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    age: "",
  });

  useEffect(() => {
    setUserInfo((pre: UserInfo) => {
      return {
        ...pre,
        id: uuidv4(),
      };
    });
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

  const handleSubmit = () => {
    dispatch(addUser(userInfo));
    setUserInfo({
      id: uuidv4(),
      name: "",
      email: "",
      contact: "",
      age: "",
    });
  };
  return (
    <div className="">
      <Navbar />
      <div className="addUser flex items-center justify-center flex-col bg-red-400  w-[100vw] h-[100vh]">
        <div className=" w-[600px] flex flex-col border-2 border-white p-6 gap-6 rounded-lg text-center">
          <h1 className=" text-white text-2xl font-bold">
            Add User Information
          </h1>
          <input
            className="inputs"
            type="text"
            placeholder="id"
            name="id"
            disabled
            value={userInfo.id}
            onChange={handleChange}
          />
          <input
            className="inputs"
            type="text"
            placeholder="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <input
            className="inputs"
            type="email"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <input
            className="inputs"
            type="number"
            placeholder="contact"
            name="contact"
            value={userInfo.contact}
            onChange={handleChange}
          />
          <input
            className="inputs"
            type="number"
            placeholder="age"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <button
            className=" w-[200px] py-3 rounded-lg border-2 border-white"
            onClick={handleSubmit}
          >
            ADD User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
