import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-4"
            width={"25px"}
            src="https://img.freepik.com/premium-vector/twitter-new-x-logo-design-vector_1340851-70.jpg"
            alt=""
          />
        </div>

        <div className="my-4">
          <Link to="/" className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">Home</h1>
          </Link>
          <div className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHashtag size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoIosNotificationsOutline size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">Notification</h1>
          </div>
          <Link
            to="profile"
            className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full"
          >
            <div>
              <CiUser size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiBookmark size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">Bookmark</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <FiLogOut size="24px" />
            </div>
            <h1 className="font-bold tx-lg ml-2">LoggOut</h1>
          </div>
          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
