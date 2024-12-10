import React from "react";
import Avatar from "react-avatar";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

function Tweet() {
  return (
    <div className="border-b border-gray-200"> 
      <div>
        <div>
          <div className="flex p-4 ">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhXamOPYdezR6BOOfYf0s28NHAjYKeo45zg&s"
              size="30"
              round={true}
            />
            <div className="ml-2 w-full">
              <div className="flex items-center ">
                <h1 className="font-bold">panchal</h1>
                <p className="text-gray-400 text-sm ml-1">@yash .1m</p>
              </div>

              <div>
                <p>Hello Devlopers lets connect</p>
              </div>

              <div className="flex justify-between my-3">
                <div className="flex items-center">
                  <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                    <GoComment size={"20px"} />
                  </div>
                  <p>0</p>
                </div>
                <div className="flex items-center">
                  <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                    <CiHeart size={"24px"} />
                  </div>
                  <p>0</p>
                </div>
                <div className="flex items-center">
                  <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                    <CiBookmark size={"24px"} />
                  </div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
