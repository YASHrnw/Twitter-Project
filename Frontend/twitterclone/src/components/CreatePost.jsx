import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

function CreatePost() {
  return (
    <div className="w-[100%] ">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center  px-4 py-3">
            <h1 className="font-semibold text-gray-700 tx-lg">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-700 tx-lg">Following</h1>
          </div>
        </div>

        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhXamOPYdezR6BOOfYf0s28NHAjYKeo45zg&s"
                size="30"
                round={true}
              />
            </div>
            <input
              className="w-full outline-none border-none text-xl ml-3"
              type="text"
              placeholder="What is happening ?"
            />
          </div>

          <div className="flex items-center  justify-between p-2 border-b border-gray-300">
            <div>
              <CiImageOn size="24px" />
            </div>
            <button className=" bg-[#1D9BF0] px-4 py-2 text-lg text-white text- border-none rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
