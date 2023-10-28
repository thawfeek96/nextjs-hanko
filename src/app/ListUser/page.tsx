"use client";
import React  from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "@/redux/slices/userSlice";




interface UserListState {
  userInfo: {
    user: UserData[];
  };
}

interface UserData {
  id: string;
  name: string;
  email: string;
  contact: string;
  age: string;
}

const ListUser: React.FC = () => {
  const user = useSelector((state: UserListState) => state.userInfo.user);
  const dispatch = useDispatch();


  const remove = (id: string) => {
    dispatch(removeUser({ id }));
  };



// useEffect(() => {
//   const fetchPosts = async () => {
//     const res = await axios.post(
//       "https://2237b1bf-a6c6-44eb-a367-b2890a0e9860.hanko.io/user", {
//         email: "mohamedthawfeek96@gmail.com"
//       }
     
//     );
    
//     console.log("res", res);
//   };
//   fetchPosts();
// }, []);

  return (
    <div>
      <Navbar />

      <div className=" flex items-center flex-wrap gap-5">
        {user.map((i: UserData) => (
          <div
            key={i.id}
            className="m-4 p-6 border-2 border-gray-300 w-[400px] rounded-lg"
          >
            <p>id: {i.name}</p>
            <p>name: {i.id}</p>
            <p>email: {i.email}</p>
            <p>contact: {i.contact}</p>
            <p>age: {i.age}</p>
            <div className="flex items-center justify-end">
              <button
                onClick={() => remove(i.id)}
                className="bg-red-400 w-[100px] py-2 rounded-lg font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
