import React from "react";
import codeimg from "../img/codeimg.jpg";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Profile() {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center  py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Panchal</h1>
            <p className="text-gray-500 text-sm">10 Post</p>
          </div>
        </div>
        <img src={codeimg} alt="banner" />
        <div className="absolute top-52 ml-2 mt-9  ">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhXamOPYdezR6BOOfYf0s28NHAjYKeo45zg&s"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4 ">
          <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-500">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold  text-2xl">panchal</h1>
          <p>yash@2212</p>
        </div>
        <div>
          <p>
         
           🌐 Exploring the web's endless possibilities MERN stack 🪢 solver by day
            code by night Coffe lover joine me this coding journey
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
