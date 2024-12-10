import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Avatar from "react-avatar";

function RightSidebar() {
  return (
    <div className="w-[25%]">
      <div className="flex  items-center  p-2 bg-gray-100 rounded-full outline-none">
        <IoSearchOutline size="20px" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none "
        />
      </div>

      <div className="p-3   bg-gray-200 rounded-md my-4">
        <h1 className="font-bold text-lg  my-3">Who to follow</h1>
        <div className="flex items-center  justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhXamOPYdezR6BOOfYf0s28NHAjYKeo45zg&s"
                size="30"
                round={true}
              />
            </div>

            <div className="ml-1">
              <h1 className="font-bold">Panchal</h1>
              <h1 className="text-sm">@yashpanchal22</h1>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
        <div className="flex items-center  justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhXamOPYdezR6BOOfYf0s28NHAjYKeo45zg&s"
                size="30"
                round={true}
              />
            </div>

            <div className="ml-1">
              <h1 className="font-bold">Panchal</h1>
              <h1 className="text-sm">@yashpanchal22</h1>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
